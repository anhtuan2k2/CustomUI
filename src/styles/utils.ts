import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// design screen size
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size; // getHeight screen
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor; // padding

const paddingIOS = Platform.OS === 'ios' ? 'padding' : '';
export {scale, verticalScale, moderateScale, paddingIOS};
