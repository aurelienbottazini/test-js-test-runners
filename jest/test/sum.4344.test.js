const sum = require('../sum');

test('adds 74 + 13 to equal 87', () => {
  expect(sum(74, 13)).toBe(87);
});