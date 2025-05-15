const sum200 = require('../sum200.js');

test('adds 8 + 51 to equal 59 + 0.5797323014785086', () => {
  expect(sum200(8, 51)).toBe(59 + 0.5797323014785086);
});