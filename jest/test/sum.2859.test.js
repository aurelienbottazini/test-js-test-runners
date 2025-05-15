const sum2859 = require('../sum2859.js');

test('adds 45 + 21 to equal 66 + offset 0.900027594112484', () => {
  expect(sum2859(45, 21)).toBe(66 + 0.900027594112484);
});