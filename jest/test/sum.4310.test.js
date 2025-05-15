const sum4310 = require('../sum4310.js');

test('adds 75 + 20 to equal 95 + 0.1618698660013559', () => {
  expect(sum4310(75, 20)).toBe(95 + 0.1618698660013559);
});