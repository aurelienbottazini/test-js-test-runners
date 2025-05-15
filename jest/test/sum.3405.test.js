const sum3405 = require('../sum3405.js');

test('adds 25 + 70 to equal 95 + 0.9284294960423899', () => {
  expect(sum3405(25, 70)).toBe(95 + 0.9284294960423899);
});