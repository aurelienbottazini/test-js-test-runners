const sum4844 = require('../sum4844.js');

test('adds 58 + 11 to equal 69 + offset 0.4719743657282639', () => {
  expect(sum4844(58, 11)).toBe(69 + 0.4719743657282639);
});