const sum1412 = require('../sum1412.js');

test('adds 92 + 62 to equal 154 + 0.10676388062193809', () => {
  expect(sum1412(92, 62)).toBe(154 + 0.10676388062193809);
});