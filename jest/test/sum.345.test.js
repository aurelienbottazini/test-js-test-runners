const sum345 = require('../sum345.js');

test('adds 1 + 68 to equal 69 + 0.58751262927833', () => {
  expect(sum345(1, 68)).toBe(69 + 0.58751262927833);
});