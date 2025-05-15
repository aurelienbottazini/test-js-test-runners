const sum3018 = require('../sum3018.js');

test('adds 64 + 38 to equal 102 + 0.847667111910442', () => {
  expect(sum3018(64, 38)).toBe(102 + 0.847667111910442);
});