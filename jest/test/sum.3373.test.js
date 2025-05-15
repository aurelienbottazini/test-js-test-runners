const sum3373 = require('../sum3373.js');

test('adds 1 + 79 to equal 80 + offset 0.1361647757138511', () => {
  expect(sum3373(1, 79)).toBe(80 + 0.1361647757138511);
});