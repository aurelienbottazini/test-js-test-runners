const sum4644 = require('../sum4644.js');

test('adds 50 + 5 to equal 55 + 0.20399829446247364', () => {
  expect(sum4644(50, 5)).toBe(55 + 0.20399829446247364);
});