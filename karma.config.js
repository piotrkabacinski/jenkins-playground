module.exports = (config) => {
  const settings = {
    frameworks: ['jasmine'],
    files: [
      'spec/test.spec.js',
    ],
    browsers: ['Chrome'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  };

  if (process.env.JENKINS_ENV) {
    settings.singleRun = true;
    settings.browsers = ['HeadlessChrome'];
  }

  config.set(settings);
};
