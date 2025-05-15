const sum3061 = require('../sum3061.js');

test('adds 17 + 23 to equal 40 + 0.9005681233684888', () => {
  expect(sum3061(17, 23)).toBe(40 + 0.9005681233684888);
});