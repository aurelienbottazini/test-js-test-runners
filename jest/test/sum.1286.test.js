const sum = require('../sum');

test('adds 55 + 13 to equal 68', () => {
  expect(sum(55, 13)).toBe(68);
});