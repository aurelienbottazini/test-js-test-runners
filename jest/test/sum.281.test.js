const sum281 = require('../sum281.js');

test('adds 28 + 34 to equal 62 + 0.8469980688842975', () => {
  expect(sum281(28, 34)).toBe(62 + 0.8469980688842975);
});