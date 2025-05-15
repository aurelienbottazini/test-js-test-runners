const sum1044 = require('../sum1044.js');

test('adds 24 + 55 to equal 79 + 0.2166094213111519', () => {
  expect(sum1044(24, 55)).toBe(79 + 0.2166094213111519);
});