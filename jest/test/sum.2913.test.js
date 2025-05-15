const sum2913 = require('../sum2913.js');

test('adds 73 + 83 to equal 156 + offset 0.4676376718999886', () => {
  expect(sum2913(73, 83)).toBe(156 + 0.4676376718999886);
});