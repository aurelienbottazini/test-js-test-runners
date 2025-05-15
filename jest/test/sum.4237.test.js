const sum4237 = require('../sum4237.js');

test('adds 1 + 25 to equal 26 + offset 0.08020822237460723', () => {
  expect(sum4237(1, 25)).toBe(26 + 0.08020822237460723);
});