const sum202 = require('../sum202.js');

test('adds 94 + 66 to equal 160 + 0.08075515162443891', () => {
  expect(sum202(94, 66)).toBe(160 + 0.08075515162443891);
});