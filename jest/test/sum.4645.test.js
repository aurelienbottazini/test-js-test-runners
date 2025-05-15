const sum4645 = require('../sum4645.js');

test('adds 41 + 34 to equal 75 + offset 0.8680503290499049', () => {
  expect(sum4645(41, 34)).toBe(75 + 0.8680503290499049);
});