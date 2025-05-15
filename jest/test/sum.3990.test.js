const sum3990 = require('../sum3990.js');

test('adds 50 + 28 to equal 78 + offset 0.997253680743143', () => {
  expect(sum3990(50, 28)).toBe(78 + 0.997253680743143);
});