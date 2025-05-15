const sum3540 = require('../sum3540.js');

test('adds 90 + 85 to equal 175 + offset 0.17896223947625844', () => {
  expect(sum3540(90, 85)).toBe(175 + 0.17896223947625844);
});