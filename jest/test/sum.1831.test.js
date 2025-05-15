const sum1831 = require('../sum1831.js');

test('adds 37 + 54 to equal 91 + 0.5223382037077433', () => {
  expect(sum1831(37, 54)).toBe(91 + 0.5223382037077433);
});