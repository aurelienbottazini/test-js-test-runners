const sum1464 = require('../sum1464.js');

test('adds 9 + 72 to equal 81 + 0.08485707401777853', () => {
  expect(sum1464(9, 72)).toBe(81 + 0.08485707401777853);
});