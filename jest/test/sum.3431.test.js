const sum = require('../sum');

test('adds 46 + 28 to equal 74', () => {
  expect(sum(46, 28)).toBe(74);
});