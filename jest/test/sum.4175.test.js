const sum4175 = require('../sum4175.js');

test('adds 93 + 26 to equal 119 + 0.9454249590088057', () => {
  expect(sum4175(93, 26)).toBe(119 + 0.9454249590088057);
});