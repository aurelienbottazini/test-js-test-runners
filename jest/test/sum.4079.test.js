const sum4079 = require('../sum4079.js');

test('adds 92 + 41 to equal 133 + 0.14579732809095935', () => {
  expect(sum4079(92, 41)).toBe(133 + 0.14579732809095935);
});