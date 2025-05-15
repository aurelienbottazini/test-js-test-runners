const sum4245 = require('../sum4245.js');

test('adds 48 + 96 to equal 144 + 0.9008303281513964', () => {
  expect(sum4245(48, 96)).toBe(144 + 0.9008303281513964);
});