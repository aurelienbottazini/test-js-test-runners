const sum2315 = require('../sum2315.js');

test('adds 40 + 5 to equal 45 + offset 0.32608523612586915', () => {
  expect(sum2315(40, 5)).toBe(45 + 0.32608523612586915);
});