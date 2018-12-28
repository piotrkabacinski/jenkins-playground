module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'index.js',
      'spec/test.spec.js',
    ],
    browsers: ['Chrome'],

    // https://hackernoon.com/running-karma-tests-with-headless-chrome-inside-docker-ae4aceb06ed3
    customLaunchers: {
      ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  });
};
