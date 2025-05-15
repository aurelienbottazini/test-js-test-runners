const sum3239 = require('../sum3239.js');

test('adds 16 + 26 to equal 42 + 0.9137899284578512', () => {
  expect(sum3239(16, 26)).toBe(42 + 0.9137899284578512);
});