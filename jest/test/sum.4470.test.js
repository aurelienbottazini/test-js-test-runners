const sum4470 = require('../sum4470.js');

test('adds 11 + 1 to equal 12 + offset 0.3444363183752631', () => {
  expect(sum4470(11, 1)).toBe(12 + 0.3444363183752631);
});