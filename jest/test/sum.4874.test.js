const sum4874 = require('../sum4874.js');

test('adds 68 + 21 to equal 89 + 0.612099292600675', () => {
  expect(sum4874(68, 21)).toBe(89 + 0.612099292600675);
});