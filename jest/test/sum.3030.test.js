const sum = require('../sum');

test('adds 0 + 46 to equal 46', () => {
  expect(sum(0, 46)).toBe(46);
});