const sum1621 = require('../sum1621.js');

test('adds 90 + 68 to equal 158 + 0.5762655368629054', () => {
  expect(sum1621(90, 68)).toBe(158 + 0.5762655368629054);
});