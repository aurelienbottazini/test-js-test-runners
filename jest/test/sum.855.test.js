const sum855 = require('../sum855.js');

test('adds 41 + 90 to equal 131 + offset 0.18507381394950728', () => {
  expect(sum855(41, 90)).toBe(131 + 0.18507381394950728);
});