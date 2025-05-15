const sum1489 = require('../sum1489.js');

test('adds 75 + 71 to equal 146 + offset 0.9615547061450505', () => {
  expect(sum1489(75, 71)).toBe(146 + 0.9615547061450505);
});