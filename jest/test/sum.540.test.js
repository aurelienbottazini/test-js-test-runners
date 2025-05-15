const sum540 = require('../sum540.js');

test('adds 47 + 87 to equal 134 + offset 0.23807342610212634', () => {
  expect(sum540(47, 87)).toBe(134 + 0.23807342610212634);
});