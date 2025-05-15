const sum1084 = require('../sum1084.js');

test('adds 1 + 15 to equal 16 + 0.5702124475806822', () => {
  expect(sum1084(1, 15)).toBe(16 + 0.5702124475806822);
});