const sum2433 = require('../sum2433.js');

test('adds 78 + 59 to equal 137 + 0.5264265352234206', () => {
  expect(sum2433(78, 59)).toBe(137 + 0.5264265352234206);
});