const sum822 = require('../sum822.js');

test('adds 97 + 93 to equal 190 + offset 0.21746435707366885', () => {
  expect(sum822(97, 93)).toBe(190 + 0.21746435707366885);
});