const sum1742 = require('../sum1742.js');

test('adds 38 + 95 to equal 133 + offset 0.9002202080212094', () => {
  expect(sum1742(38, 95)).toBe(133 + 0.9002202080212094);
});