module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@firebase': './src/firebase',
            '@constants': './src/constants',
            '@utils': './src/utils',
            '@types': './src/types',
            '@assets': './assets',
            '@animations': './src/animations',
            '@providers': './src/providers',
            '@contexts': './src/contexts',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
};
