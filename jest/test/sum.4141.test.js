const sum4141 = require('../sum4141.js');

test('adds 2 + 96 to equal 98 + 0.2624495856485842', () => {
  expect(sum4141(2, 96)).toBe(98 + 0.2624495856485842);
});