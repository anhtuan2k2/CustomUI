import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const FontsBasic = {
  OpenSansBold: 'OpenSans-Bold',
  OpenSansBoldItalic: 'OpenSans-BoldItalic',
  OpenSansExtraBold: 'OpenSans-ExtraBold',
  OpenSansExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
  OpenSansItalic: 'OpenSans-Italic',
  OpenSansLight: 'OpenSans-Light',
  OpenSansLightItalic: 'OpenSans-LightItalic',
  OpenSansRegular: isIOS ? 'OpenSans' : 'OpenSans-Regular',
  OpenSansSemiBold: 'OpenSans-Semibold',
  OpenSansSemiBoldItalic: 'OpenSans-SemiBoldItalic',
};

export default FontsBasic;
