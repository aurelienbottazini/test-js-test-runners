const sum = require('../sum');

test('adds 21 + 80 to equal 101', () => {
  expect(sum(21, 80)).toBe(101);
});