const sum3470 = require('../sum3470.js');

test('adds 79 + 50 to equal 129 + offset 0.7847703113127422', () => {
  expect(sum3470(79, 50)).toBe(129 + 0.7847703113127422);
});