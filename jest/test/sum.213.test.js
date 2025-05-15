const sum213 = require('../sum213.js');

test('adds 88 + 99 to equal 187 + offset 0.6855918171694673', () => {
  expect(sum213(88, 99)).toBe(187 + 0.6855918171694673);
});