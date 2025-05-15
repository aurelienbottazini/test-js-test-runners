const sum4716 = require('../sum4716.js');

test('adds 97 + 38 to equal 135 + offset 0.5030249470869699', () => {
  expect(sum4716(97, 38)).toBe(135 + 0.5030249470869699);
});