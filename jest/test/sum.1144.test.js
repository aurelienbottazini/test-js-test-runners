const sum1144 = require('../sum1144.js');

test('adds 97 + 41 to equal 138 + offset 0.06733828925616347', () => {
  expect(sum1144(97, 41)).toBe(138 + 0.06733828925616347);
});