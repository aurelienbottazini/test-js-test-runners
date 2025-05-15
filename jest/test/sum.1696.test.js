const sum1696 = require('../sum1696.js');

test('adds 25 + 16 to equal 41 + 0.928366126974731', () => {
  expect(sum1696(25, 16)).toBe(41 + 0.928366126974731);
});