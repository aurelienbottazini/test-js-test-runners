const sum589 = require('../sum589.js');

test('adds 79 + 58 to equal 137 + 0.9450759498767844', () => {
  expect(sum589(79, 58)).toBe(137 + 0.9450759498767844);
});