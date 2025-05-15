const sum695 = require('../sum695.js');

test('adds 88 + 46 to equal 134 + offset 0.3507681849444154', () => {
  expect(sum695(88, 46)).toBe(134 + 0.3507681849444154);
});