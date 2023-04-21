import {
  AccessibilityInfo,
  Appearance,
  Dimensions,
  I18nManager,
  NativeModules,
  Platform,
  StatusBar,
} from 'react-native';
import type {NavigationConstants} from 'react-native-navigation';

interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const orientations = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
};

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
let isTablet: boolean;
let statusBarHeight: number;
let screenHeight = Dimensions.get('screen').height;
let screenWidth = Dimensions.get('screen').width;
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

let appInsets = {top: 0, bottom: 0, left: 0, right: 0};
let navigationConstants: NavigationConstants = {
  statusBarHeight: 0,
  backButtonId: '',
  topBarHeight: 0,
  bottomTabsHeight: 0,
};

isTablet = getAspectRatio() < 1.6 && Math.max(screenWidth, screenHeight) >= 900;

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  (screenHeight === 780 ||
    screenWidth === 780 ||
    screenHeight === 812 ||
    screenWidth === 812 ||
    screenHeight === 844 ||
    screenWidth === 844 ||
    screenHeight === 896 ||
    screenWidth === 896 ||
    screenHeight === 926 ||
    screenWidth === 926);

export function ifIphoneX(iphoneXStyle: any, regularStyle: any) {
  if (isIphoneX) {
    return iphoneXStyle;
  }
  return regularStyle;
}

function getStatusBarHeight(safe?: boolean) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace() {
  return isIphoneX ? 34 : 0;
}

export function setStatusBarHeight() {
  const {StatusBarManager} = NativeModules;
  statusBarHeight = 0; // so there will be a value for any case
  statusBarHeight = isIOS ? 20 : StatusBarManager.HEIGHT;
  if (isIOS) {
    // override guesstimate height with the actual height from StatusBarManager
    StatusBarManager.getHeight(
      (data: {height: number}) => (statusBarHeight = data.height)
    );
  }
}

function getAspectRatio() {
  return screenWidth < screenHeight
    ? screenHeight / screenWidth
    : screenWidth / screenHeight;
}

function getOrientation(height: number, width: number) {
  return width < height ? orientations.PORTRAIT : orientations.LANDSCAPE;
}

export function updateConstants(dimensions: any) {
  screenHeight = dimensions.screen.height;
  screenWidth = dimensions.screen.width;
  windowWidth = dimensions.window.width;
  windowHeight = dimensions.window.height;

  setStatusBarHeight();
}

const accessibility = {
  isScreenReaderEnabled: false,
};

function handleScreenReaderChanged(isScreenReaderEnabled: any) {
  accessibility.isScreenReaderEnabled = isScreenReaderEnabled as boolean;
}

AccessibilityInfo.addEventListener(
  'screenReaderChanged',
  handleScreenReaderChanged
);

function setAccessibility() {
  AccessibilityInfo.isScreenReaderEnabled().then(isScreenReaderEnabled => {
    accessibility.isScreenReaderEnabled = isScreenReaderEnabled;
  });
}

setAccessibility();

const Constants = {
  /* Platform */
  orientations,
  isAndroid,
  isIOS,
  isIphoneX,
  getAndroidVersion: () => {
    return isAndroid ? parseInt(Platform.Version as string, 10) : undefined;
  },
  /* Navigation */
  get statusBarHeight() {
    return statusBarHeight;
  },
  /* Layout */
  isRTL: I18nManager.isRTL,
  get orientation() {
    return getOrientation(screenHeight, screenWidth);
  },
  get isLandscape() {
    return getOrientation(screenHeight, screenWidth) === orientations.LANDSCAPE;
  },
  get screenWidth() {
    return screenWidth;
  },
  get screenHeight() {
    return screenHeight;
  },
  get windowWidth() {
    return windowWidth;
  },
  get windowHeight() {
    return windowHeight;
  },
  get isSmallScreen() {
    return screenWidth <= 340;
  },
  get isShortScreen() {
    return screenHeight <= 600;
  },
  get screenAspectRatio() {
    return getAspectRatio();
  },
  get isTablet() {
    return isTablet;
  },
  set isTablet(value: boolean) {
    isTablet = value;
  },
  get safeAreaInsets() {
    return appInsets;
  },
  set safeAreaInsets(value: EdgeInsets) {
    appInsets = value;
  },

  get navigation() {
    return navigationConstants;
  },
  set navigation(values: NavigationConstants) {
    navigationConstants = values;
  },

  getSafeAreaInsets: () => {
    const orientation = getOrientation(screenHeight, screenWidth);
    return orientation === orientations.LANDSCAPE
      ? isIphoneX
        ? {left: 48, right: 48, bottom: 24, top: 0}
        : {left: 0, right: 0, bottom: 0, top: 0}
      : isIphoneX
      ? {left: 0, right: 0, bottom: 33, top: 48}
      : {left: 0, right: 0, bottom: 0, top: isIOS ? 20 : 0};
  },
  /* Orientation */
  addDimensionsEventListener: (callback: any) => {
    return Dimensions.addEventListener('change', callback);
  },
  getStatusBarHeight: () => {
    return getStatusBarHeight();
  },

  get accessibility() {
    return accessibility;
  },
  colorScheme: Appearance.getColorScheme(),
};

setStatusBarHeight();

Dimensions.addEventListener('change', updateConstants);

export default Constants;
