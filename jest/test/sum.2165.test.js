const sum2165 = require('../sum2165.js');

test('adds 76 + 82 to equal 158 + offset 0.35055283372226986', () => {
  expect(sum2165(76, 82)).toBe(158 + 0.35055283372226986);
});