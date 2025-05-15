const sum814 = require('../sum814.js');

test('adds 17 + 71 to equal 88 + 0.728874824473134', () => {
  expect(sum814(17, 71)).toBe(88 + 0.728874824473134);
});