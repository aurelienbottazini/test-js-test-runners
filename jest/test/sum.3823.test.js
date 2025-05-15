const sum3823 = require('../sum3823.js');

test('adds 36 + 28 to equal 64 + 0.44559733788119305', () => {
  expect(sum3823(36, 28)).toBe(64 + 0.44559733788119305);
});