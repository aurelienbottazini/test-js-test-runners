const sum1330 = require('../sum1330.js');

test('adds 15 + 27 to equal 42 + offset 0.9499014111937805', () => {
  expect(sum1330(15, 27)).toBe(42 + 0.9499014111937805);
});