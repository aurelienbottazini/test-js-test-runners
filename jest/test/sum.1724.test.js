const sum1724 = require('../sum1724.js');

test('adds 50 + 77 to equal 127 + offset 0.3603876959034219', () => {
  expect(sum1724(50, 77)).toBe(127 + 0.3603876959034219);
});