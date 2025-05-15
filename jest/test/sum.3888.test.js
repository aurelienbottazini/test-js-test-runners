const sum3888 = require('../sum3888.js');

test('adds 65 + 29 to equal 94 + 0.019486531715408373', () => {
  expect(sum3888(65, 29)).toBe(94 + 0.019486531715408373);
});