const sum1900 = require('../sum1900.js');

test('adds 16 + 14 to equal 30 + offset 0.507745570873012', () => {
  expect(sum1900(16, 14)).toBe(30 + 0.507745570873012);
});