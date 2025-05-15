const sum3066 = require('../sum3066.js');

test('adds 94 + 88 to equal 182 + offset 0.3827641549024001', () => {
  expect(sum3066(94, 88)).toBe(182 + 0.3827641549024001);
});