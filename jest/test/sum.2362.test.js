const sum2362 = require('../sum2362.js');

test('adds 94 + 28 to equal 122 + 0.510161307404734', () => {
  expect(sum2362(94, 28)).toBe(122 + 0.510161307404734);
});