module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'index.js',
      'spec/test.spec.js',
    ],
    browsers: ['Chrome'],
  });
};
