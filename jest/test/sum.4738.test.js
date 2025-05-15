const sum4738 = require('../sum4738.js');

test('adds 66 + 0 to equal 66 + 0.9088759733084365', () => {
  expect(sum4738(66, 0)).toBe(66 + 0.9088759733084365);
});