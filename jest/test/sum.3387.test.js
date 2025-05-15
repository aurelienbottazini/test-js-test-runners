const sum3387 = require('../sum3387.js');

test('adds 12 + 82 to equal 94 + 0.010513637918748153', () => {
  expect(sum3387(12, 82)).toBe(94 + 0.010513637918748153);
});