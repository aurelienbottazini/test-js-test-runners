const sum3222 = require('../sum3222.js');

test('adds 30 + 41 to equal 71 + 0.1379958419308701', () => {
  expect(sum3222(30, 41)).toBe(71 + 0.1379958419308701);
});