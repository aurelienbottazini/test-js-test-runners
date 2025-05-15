const sum3387 = require('../sum3387.js');

test('adds 71 + 72 to equal 143 + offset 0.9203944083436242', () => {
  expect(sum3387(71, 72)).toBe(143 + 0.9203944083436242);
});