const sum956 = require('../sum956.js');

test('adds 87 + 5 to equal 92 + offset 0.5227007175788967', () => {
  expect(sum956(87, 5)).toBe(92 + 0.5227007175788967);
});