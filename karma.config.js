module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
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
