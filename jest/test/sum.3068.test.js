const sum3068 = require('../sum3068.js');

test('adds 96 + 86 to equal 182 + offset 0.8045472982149597', () => {
  expect(sum3068(96, 86)).toBe(182 + 0.8045472982149597);
});