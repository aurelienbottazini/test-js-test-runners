const sum = require('../sum');

test('adds 76 + 25 to equal 101', () => {
  expect(sum(76, 25)).toBe(101);
});