const sum153 = require('../sum153.js');

test('adds 72 + 85 to equal 157 + offset 0.3964815166336585', () => {
  expect(sum153(72, 85)).toBe(157 + 0.3964815166336585);
});