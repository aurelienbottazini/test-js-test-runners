const sum4829 = require('../sum4829.js');

test('adds 1 + 9 to equal 10 + offset 0.5808246771771629', () => {
  expect(sum4829(1, 9)).toBe(10 + 0.5808246771771629);
});