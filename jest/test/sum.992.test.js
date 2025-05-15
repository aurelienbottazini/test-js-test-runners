const sum992 = require('../sum992.js');

test('adds 42 + 90 to equal 132 + offset 0.5398527417041968', () => {
  expect(sum992(42, 90)).toBe(132 + 0.5398527417041968);
});