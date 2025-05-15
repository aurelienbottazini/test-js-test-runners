const sum3191 = require('../sum3191.js');

test('adds 70 + 19 to equal 89 + 0.6200318459164605', () => {
  expect(sum3191(70, 19)).toBe(89 + 0.6200318459164605);
});