const sum3418 = require('../sum3418.js');

test('adds 28 + 25 to equal 53 + offset 0.1576336778133709', () => {
  expect(sum3418(28, 25)).toBe(53 + 0.1576336778133709);
});