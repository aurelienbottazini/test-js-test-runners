const sum3925 = require('../sum3925.js');

test('adds 64 + 47 to equal 111 + offset 0.7737662222353936', () => {
  expect(sum3925(64, 47)).toBe(111 + 0.7737662222353936);
});