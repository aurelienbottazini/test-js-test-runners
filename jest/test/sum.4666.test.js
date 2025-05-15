const sum = require('../sum');

test('adds 74 + 11 to equal 85', () => {
  expect(sum(74, 11)).toBe(85);
});