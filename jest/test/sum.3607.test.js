const sum3607 = require('../sum3607.js');

test('adds 45 + 37 to equal 82 + 0.5677530457679614', () => {
  expect(sum3607(45, 37)).toBe(82 + 0.5677530457679614);
});