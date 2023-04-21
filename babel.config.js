module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@components2': './src/components2',
          '@components3': './src/components3',
          '@constants': './src/constants',
          '@context': './src/context',
          '@hoc': './src/hoc',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@modules': './src/modules',
          '@queries': './src/queries',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@screens2': './src/screens2',
          '@screens3': './src/screens3',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
