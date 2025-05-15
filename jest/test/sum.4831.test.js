const sum4831 = require('../sum4831.js');

test('adds 16 + 28 to equal 44 + 0.9048594857403411', () => {
  expect(sum4831(16, 28)).toBe(44 + 0.9048594857403411);
});