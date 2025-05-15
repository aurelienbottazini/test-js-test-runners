const sum534 = require('../sum534.js');

test('adds 4 + 31 to equal 35 + offset 0.5687123299954019', () => {
  expect(sum534(4, 31)).toBe(35 + 0.5687123299954019);
});