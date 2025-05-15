const sum4518 = require('../sum4518.js');

test('adds 41 + 71 to equal 112 + 0.8247077533627866', () => {
  expect(sum4518(41, 71)).toBe(112 + 0.8247077533627866);
});