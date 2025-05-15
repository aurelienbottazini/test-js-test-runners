const sum610 = require('../sum610.js');

test('adds 5 + 77 to equal 82 + offset 0.22711264525781805', () => {
  expect(sum610(5, 77)).toBe(82 + 0.22711264525781805);
});