const foo = require('../index');

describe('A suite is just a function', () => {
  it('and so is a spec', () => {
    expect(foo()).toBe(true);
  });
});
