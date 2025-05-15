const sum303 = require('../sum303.js');

test('adds 63 + 41 to equal 104 + offset 0.2433754164413393', () => {
  expect(sum303(63, 41)).toBe(104 + 0.2433754164413393);
});