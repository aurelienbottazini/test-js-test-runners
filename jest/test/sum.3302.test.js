const sum = require('../sum');

test('adds 30 + 4 to equal 34', () => {
  expect(sum(30, 4)).toBe(34);
});