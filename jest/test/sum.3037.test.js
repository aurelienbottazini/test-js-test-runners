const sum3037 = require('../sum3037.js');

test('adds 97 + 50 to equal 147 + offset 0.4949648406605408', () => {
  expect(sum3037(97, 50)).toBe(147 + 0.4949648406605408);
});