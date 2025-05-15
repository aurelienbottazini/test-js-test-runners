const sum3840 = require('../sum3840.js');

test('adds 5 + 62 to equal 67 + 0.43967078549714156', () => {
  expect(sum3840(5, 62)).toBe(67 + 0.43967078549714156);
});