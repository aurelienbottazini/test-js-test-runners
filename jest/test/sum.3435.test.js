const sum3435 = require('../sum3435.js');

test('adds 60 + 5 to equal 65 + offset 0.03726883145040538', () => {
  expect(sum3435(60, 5)).toBe(65 + 0.03726883145040538);
});