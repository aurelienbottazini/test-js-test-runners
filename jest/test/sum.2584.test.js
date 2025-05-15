const sum2584 = require('../sum2584.js');

test('adds 57 + 22 to equal 79 + offset 0.5088530969942406', () => {
  expect(sum2584(57, 22)).toBe(79 + 0.5088530969942406);
});