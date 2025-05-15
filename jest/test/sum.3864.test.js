const sum3864 = require('../sum3864.js');

test('adds 92 + 97 to equal 189 + 0.2576177527184058', () => {
  expect(sum3864(92, 97)).toBe(189 + 0.2576177527184058);
});