import {Dimensions} from 'react-native';
import Screens from '@screens/Screens';

export const enum ProductFilterTypes {
  PRICE_RANGE = 'PRICE_RANGE',
}

export const enum SearchEngines {
  default = 'default',
  searchanise = 'searchanise',
}

export const enum ReviewFieldTypes {
  field = 'field',
  radio = 'radio',
  area = 'area',
}

export const enum AuthorizationStatus {
  authorized = 'authorized',
  denied = 'denied',
}

export const CurrencyKeys = {
  KEY_USD: 'USD',
  SYMBOL_USD: '$',
  KEY_AUD: 'AUD',
  SYMBOL_AUD: 'AU$',
  KEY_GBP: 'GBP',
  SYMBOL_GBP: 'UK£',
  KEY_EUR: 'EUR',
  SYMBOL_EUR: '€',
  KEY_CNY: 'CNY',
  SYMBOL_CNY: 'CN¥',
  KEY_BDT: 'BDT',
  SYMBOL_BDT: 'Tk',
  KEY_SYP: 'SYP',
  KEY_SEK: 'SEK',
  SYMBOL_SEKL: 'kr',
  KEY_SAR: 'SAR',
  SYMBOL_SAR: 'SR',
  KEY_XOF: 'XOF',
  SYMBOL_XOF: 'CFA',
} as const;

export const enum PriceTypes {
  BASE = 'BASE',
  SALE = 'SALE',
  RETAIL_BASE = 'RETAIL_BASE',
  RETAIL_SALE = 'RETAIL_SALE',
  BASE_SALE = 'BASE_SALE',
  ALL = 'ALL',
  RANGE = 'RANGE',
}

export const SHOW_SALE_TAG_CONDITIONS_WITHOUT_MSRP = [
  PriceTypes.BASE_SALE,
  PriceTypes.ALL,
];

export const SHOW_SALE_TAG_CONDITIONS = [
  'RETAIL_BASE',
  'RETAIL_SALE',
  'BASE_SALE',
  'ALL',
];

export const Alphabets = [...'abcdefghijklmnopqrstuvwxyz'];
export const ArabicAlphabets = [...'أإبتثجحخدذرزسشصضطظعغفقكلمنهوى'];

export const enum CustomerRegisterFields {
  Email = 'email-address',
  EmailConfirm = 'emailconfirm',
  Password = 'password',
  PasswordConfirm = 'confirm-password',
  AddressId = 'addressId',
  FirstName = 'first-name',
  LastName = 'last-name',
  Address1 = 'address-1',
  Address2 = 'address-2',
  City = 'suburb-city',
  PostalCode = 'zip-postcode',
  Phone = 'phone-number',
  Country = 'country',
  State = 'state-province',
  orderEmail = 'orderEmail',
  Date = 'date',
  Company = 'company-name',
}

export const enum CustomerRegisterFieldsType {
  Email = 'email-address',
  Password = 'password',
  City = 'city',
  Phone = 'phone-number',
  Country = 'country',
  Date = 'date',
  Text = 'text-field',
  CheckBox = 'checkbox',
  PickList = 'pick-list',
  CountryList = 'country-list',
  StateList = 'state-list',
}

export const enum LayoutProductList {
  GridView = 'grid',
  ListView = 'list',
  SingleView = 'single',
}

export const enum Environments {
  Development = 'merkel',
  UAT = 'kim',
  Production = 'elbrus',
}

export const enum NavigationBottomTabsIndex {
  home = 0,
  search,
  wishlist,
  cart,
  more,
}

export const enum NotificationChannels {
  default = 'Default_Channel',
}

export const enum BuildTypes {
  EndUser = 'END_USER',
  PreviewUser = 'PREVIEW_USER',
}

export const enum ModuleType {
  mainMenu = 'MAIN_MENU',
  catalog = 'ECOMMERCE_CATALOG',
  authentication = 'USER_AUTH',
  notification = 'PUSH_NOTIFICATION',
  customerenquiry = 'CUSTOMER_ENQUIRY',
  about = 'ABOUT_US',
  locations = 'STORE_LOCATIONS',
  home = 'HOME_SCREEN',
  home2nd = 'HOME_SCREEN2',
  barcode = 'PRODUCT_BARCODE_SCAN',
  gatrack = 'GA_TRACKERS',
  lookbook = 'LOOKBOOK',
  none = 'NONE',
}

export const enum NotificationEndPoints {
  product = 'product',
  catalog = 'catalog',
  order = 'order',
  none = 'none',
  module = 'module',
}

export const enum RemoteNotification {
  keyStore = 'remote-messages',
}

export const enum ProductRatingType {
  field = 'field',
  radio = 'radio',
  area = 'area',
}

/**
 * @deprecated
 * use @styles instead
 */
const {width} = Dimensions.get('window');

export const ROOT_ACC_QA = 'qavn@jmango360.com';

export const NavigationStackComponents = [
  Screens.HomeStack,
  Screens.ShopStack,
  Screens.ShopBagStack,
  Screens.NotificationStack,
  Screens.UserStack,
];

export const enum HeaderKey {
  JM360_VERSION = 'JM360_VERSION',
  JM360_APP_VERSION = 'JM360_APP_VERSION',
  JM360_APP_TYPE = 'JM360_APP_TYPE',
  JM360_APP_ID = 'JM360_APP_ID',
  JM360_APP_KEY = 'JM360_APP_KEY',
  JM360_DEVICE_KEY = 'JM360_DEVICE_KEY',
  JM360_BUILD = 'JM360_BUILD',
  JM360_OS_TYPE = 'JM360_OS_TYPE',
  JM360_OS_VERSION = 'JM360_OS_VERSION',
  JM360_DEVICE_MODEL = 'JM360_DEVICE_MODEL',
  JM360_ENV = 'JM360_ENV',
  APP_TYPE_CODE = 'JM360_APP_TYPE_CODE',
  JM360_SO_KP = 'jm360_so_kp',
  JM360_SO_KP_EXP = 'jm360_so_kp_exp',
  JM360_SO_KP_VER = 'jm360_so_kp_ver',
  JM360_KP_EXP = 'jm360_kp_exp',
  JM360_KP = 'jm360_kp',
  JM360_KP_VER = 'jm360_kp_ver',
  Authorization = 'Authorization',
}

export const Checkout = {
  Type: {
    MAGEJAM: 0,
    ONE_PAGE: 3,
    WEB_CHECKOUT: 99,
  },
};

/**
 * @deprecated
 * use generate type instead
 */
export const keyNav = {
  userName: 'userName',
  listLanguage: 'listLanguage',
  appKey: 'appKey',
  appTypeCode: 'appTypeCode',
  objModule: 'objModule',
  objBrowseList: 'objBrowseList',
  sortBy: 'sortBy',
  sortDirection: 'sortDirection',
  typeList: 'typeList',
  selectTypeListCb: 'selectTypeListCb',
  selectSortCb: 'selectSortCb',
  queryKey: 'queryKey',
  typeSearch: 'typeSearch',
  pressHeaderSearch: 'pressHeaderSearch',
  productId: 'productId',
  productType: 'productType',
  listReview: 'listReview',
  listConfigReview: 'listConfigReview',
  fromSearchProduct: 'fromSearchProduct',
  isAllowGuestReview: 'isAllowGuestReview',
  listOptionProductDetail: 'listOptionProductDetail',
  fromScreenToDetail: 'fromScreenToDetail',
  loginSuccessCb: 'loginSuccessCb',
  listLookBook: 'listLookBook',
  indexSelectedLookBook: 'indexSelectedLookBook',
  addressItem: 'addressItem',
  userCurrentLocation: 'userCurrentLocation',
  listOverView: 'listOverView',
  reviewNum: 'reviewNum',
  itemNotifi: 'itemNotifi',
  isShowBackButton: 'isShowBackButton',
  contentDeeplinkNotifi: 'contentDeeplinkNotifi',
  selectColorItem: 'selectColorItem',
  selectSizeItem: 'selectSizeItem',
  productData: 'productData',
  categoryName: 'categoryName',
  moduleId: 'moduleId',
  universalLinkURL: 'universalLinkURL',
  isRefreshApp: 'isRefreshApp',
  dynamicLinkURL: 'dynamicLinkURL',
  isFromDynamicLink: 'isFromDynamicLink',
  isScanBarcodeB2B: 'isScanBarcodeB2B',
  category: 'category',
};

export const ModuleAction = {
  LOAD_MODULE: 'LOADMODULE ',
  DIALOG: 'DIALOG ',
  WEB: 'WEB ',
  CALL: 'CALL ',
  EMAIL: 'EMAIL ',
  SMS: 'SMS ',
  SCAN_BARCODE: 'PRODUCT_BARCODE_SCAN',
  LOAD_PRODUCT: 'LOAD_PRODUCT',
  TAP_VERSION: 'TAP_VERSION',
  PRODUCT_BARCODE_SCAN_B2B: 'PRODUCT_BARCODE_SCAN_B2B',
};

export const layoutItemGrid = {
  desciptionHeight: 40,
  customizeTextHeight: 35,
  itemViewBot: 20,
  borderVerticalWidth: 1.5,
  borderHorizontalWidth: 1.5,
  paddingVertical: 13,
  paddingHorizontal: 13,
  imgItemHeight: width * 0.43,
  titleTop: 6,
  titleHeight: 16.5,
  titleBot: 2,
  ratingTop: 5,
  ratingHeight: 17,
  ratingBot: 15, // range from start and price
  asLowAsTop: 15,
  asLowAsHeight: 64,
  asLowAsBot: 0,
  asLowAsHeightCenter: 64,
  desciptionMaxHeight: 44,
  desciptionMinHeight: 22,
  startAtHeight: 64,
  startAtBot: 0,
  startAtTop: 15,
  startAtHeightCenter: 64,
  discountHeight: 64,
  discountBot: 0,
  discountTop: 15,
  discountHeightCenter: 69,
  fromToHeightCenter: 80,
  fromToHeight: 65,
  fromToTop: 15,
  fromToBot: 0,
  requireLoginBtnHeight: 26,
  requireLoginBtnBot: 20,
  requireLoginBtnTop: 15,
  basicPriceHeight: 50,
  basicPriceHeightCenter: 65,
  basicPriceTop: 15,
  basicPriceBot: 0,
  basicAsLowAsHeight: 75,
  basicAsLowAsHeightCenter: 95,
  basicAsLowAsTop: 15,
  basicAsLowAsBot: 0,
  outOfStockHeight: 18,
  outOfStockBot: 0,
  outOfStockTop: 15,
  outOfStockHeightCenter: 65,
  discountAsLowAsHeight: 110,
  discountAsLowAsTop: 15,
  discountAsLowAsBot: 0,
  discountAsLowAsHeightCenter: 125,
  heightCart: 31,
  customizeTextTop: 5,
  cartHeight: 31,
  cartTop: 10,
};

export const baseRatioImgSingle = 190 / 355;

/**
 * @deprecated
 */
export const layoutItemSingle = {
  paddingItemBot: 20,
  itemTop: 10,
  marginImgTop: 10,
  imgItemWidth: width * 0.95,
  imgItemHeight: width * 0.95 * baseRatioImgSingle, // for loading item.
  titleLeft: 5,
  titleTop: 9,
  titleHeight: 20,
  desciptionHeight: 40,
  ratingTop: 3,
  ratingHeight: 19,
  ratingBot: 8,
  newTopHeight: 8,
  customizeTextTop: 5,
  customizeTextHeight: 17.5,
  cartTop: 10,
  cartHeight: 31,
  asLowAsTop: 8,
  asLowAsHeight: 31,
  asLowAsHeightCenter: 30,
  asLowAsBot: 20,
  desciptionMaxHeight: 44,
  desciptionMinHeight: 22,
  startAtHeight: 31,
  startAtTop: 8,
  startAtHeightCenter: 30,
  discountHeight: 55,
  discountBot: 22,
  discountTop: 8,
  discountHeightCenter: 50,
  fromToHeightCenter: 45,
  fromToHeight: 46,
  fromToTop: 10,
  fromToBot: 16,
  requireLoginBtnHeight: 31,
  requireLoginBtnBot: 15,
  requireLoginBtnTop: 15,
  basicPriceHeight: 31,
  basicPriceHeightCenter: 30,
  basicPriceTop: 8,
  basicAsLowAsHeight: 50,
  basicAsLowAsHeightCenter: 50,
  basicAsLowAsTop: 8,
  basicAsLowAsBot: 16,
  outOfStockHeight: 18,
  outOfStockBot: 20,
  outOfStockTop: 8,
  outOfStockHeightCenter: 50,
  discountAsLowAsHeight: 70,
  discountAsLowAsTop: 8,
  discountAsLowAsBot: 20,
  discountAsLowAsHeightCenter: 80,
};
/**
 * @deprecated
 */
export const ReleaseVersion = {
  beta: 'beta',
  alpha: 'alpha',
};

export const TYPE_LINK = {
  WEB: 0,
  FACEBOOK: 1,
  FACEBOOK_PROFILE: 2,
  FACEBOOK_PAGE: 3,
  INSTAGRAM: 4,
  TWITTER: 5,
  PINTEREST: 6,
  LINKEDIN: 7,
  YOUTUBE: 8,
  WHATSAPP: 9,
};

export const BottomTabs = 'BottomTabs';

export const DATE_FORMAT = 'D MMMM YYYY';

export const RTLLanguages = ['ar'];

export const PatternPriceIMap = 'Hidden: Display Price ';
export const enum TypeLoyalty {
  Loyalty = 'Loyalty',
}
