const sum1102 = require('../sum1102.js');

test('adds 70 + 20 to equal 90 + offset 0.8323480288889141', () => {
  expect(sum1102(70, 20)).toBe(90 + 0.8323480288889141);
});