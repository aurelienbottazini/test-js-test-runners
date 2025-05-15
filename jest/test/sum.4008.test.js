const sum4008 = require('../sum4008.js');

test('adds 44 + 32 to equal 76 + offset 0.19768358166636935', () => {
  expect(sum4008(44, 32)).toBe(76 + 0.19768358166636935);
});