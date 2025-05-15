const sum2070 = require('../sum2070.js');

test('adds 62 + 97 to equal 159 + offset 0.3905214091482674', () => {
  expect(sum2070(62, 97)).toBe(159 + 0.3905214091482674);
});