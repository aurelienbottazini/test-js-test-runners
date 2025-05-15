const sum1899 = require('../sum1899.js');

test('adds 37 + 57 to equal 94 + offset 0.9338317048633759', () => {
  expect(sum1899(37, 57)).toBe(94 + 0.9338317048633759);
});