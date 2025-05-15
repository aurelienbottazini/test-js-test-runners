const sum781 = require('../sum781.js');

test('adds 89 + 40 to equal 129 + 0.5675628270185227', () => {
  expect(sum781(89, 40)).toBe(129 + 0.5675628270185227);
});