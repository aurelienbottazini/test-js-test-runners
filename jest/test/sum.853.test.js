const sum853 = require('../sum853.js');

test('adds 70 + 7 to equal 77 + 0.2042801721983456', () => {
  expect(sum853(70, 7)).toBe(77 + 0.2042801721983456);
});