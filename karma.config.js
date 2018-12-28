module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'index.js',
      'spec/test.spec.js',
    ],
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  });
};
