const sum1277 = require('../sum1277.js');

test('adds 67 + 60 to equal 127 + offset 0.3277907833120308', () => {
  expect(sum1277(67, 60)).toBe(127 + 0.3277907833120308);
});