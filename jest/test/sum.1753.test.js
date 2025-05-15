const sum1753 = require('../sum1753.js');

test('adds 29 + 68 to equal 97 + 0.2177023687300711', () => {
  expect(sum1753(29, 68)).toBe(97 + 0.2177023687300711);
});