const sum3675 = require('../sum3675.js');

test('adds 60 + 29 to equal 89 + offset 0.13277196217740606', () => {
  expect(sum3675(60, 29)).toBe(89 + 0.13277196217740606);
});