const sum1755 = require('../sum1755.js');

test('adds 99 + 10 to equal 109 + 0.3761969242085257', () => {
  expect(sum1755(99, 10)).toBe(109 + 0.3761969242085257);
});