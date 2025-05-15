const sum749 = require('../sum749.js');

test('adds 56 + 27 to equal 83 + 0.34072226287495144', () => {
  expect(sum749(56, 27)).toBe(83 + 0.34072226287495144);
});