const sum4361 = require('../sum4361.js');

test('adds 91 + 15 to equal 106 + 0.9648525986291179', () => {
  expect(sum4361(91, 15)).toBe(106 + 0.9648525986291179);
});