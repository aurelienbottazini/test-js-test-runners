const sum4184 = require('../sum4184.js');

test('adds 4 + 64 to equal 68 + offset 0.43682024239517736', () => {
  expect(sum4184(4, 64)).toBe(68 + 0.43682024239517736);
});