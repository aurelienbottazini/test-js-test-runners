const sum = require('../sum');

test('adds 99 + 13 to equal 112', () => {
  expect(sum(99, 13)).toBe(112);
});