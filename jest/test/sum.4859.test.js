const sum4859 = require('../sum4859.js');

test('adds 26 + 6 to equal 32 + 0.8039463307337747', () => {
  expect(sum4859(26, 6)).toBe(32 + 0.8039463307337747);
});