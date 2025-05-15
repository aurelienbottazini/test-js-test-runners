const sum4927 = require('../sum4927.js');

test('adds 26 + 79 to equal 105 + offset 0.7775265317199119', () => {
  expect(sum4927(26, 79)).toBe(105 + 0.7775265317199119);
});