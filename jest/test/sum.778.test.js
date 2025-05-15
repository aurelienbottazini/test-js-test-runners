const sum778 = require('../sum778.js');

test('adds 54 + 66 to equal 120 + offset 0.3176225955414411', () => {
  expect(sum778(54, 66)).toBe(120 + 0.3176225955414411);
});