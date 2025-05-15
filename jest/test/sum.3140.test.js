const sum3140 = require('../sum3140.js');

test('adds 82 + 17 to equal 99 + offset 0.8215886563735358', () => {
  expect(sum3140(82, 17)).toBe(99 + 0.8215886563735358);
});