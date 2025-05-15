const sum973 = require('../sum973.js');

test('adds 32 + 96 to equal 128 + offset 0.6222812212543845', () => {
  expect(sum973(32, 96)).toBe(128 + 0.6222812212543845);
});