const sum4186 = require('../sum4186.js');

test('adds 97 + 58 to equal 155 + offset 0.47347272534928875', () => {
  expect(sum4186(97, 58)).toBe(155 + 0.47347272534928875);
});