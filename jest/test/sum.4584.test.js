const sum4584 = require('../sum4584.js');

test('adds 81 + 75 to equal 156 + offset 0.6215003208377955', () => {
  expect(sum4584(81, 75)).toBe(156 + 0.6215003208377955);
});