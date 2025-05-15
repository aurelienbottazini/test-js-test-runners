const sum4358 = require('../sum4358.js');

test('adds 18 + 29 to equal 47 + offset 0.9071156433041043', () => {
  expect(sum4358(18, 29)).toBe(47 + 0.9071156433041043);
});