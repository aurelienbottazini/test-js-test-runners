const sum305 = require('../sum305.js');

test('adds 50 + 94 to equal 144 + 0.3202686470388215', () => {
  expect(sum305(50, 94)).toBe(144 + 0.3202686470388215);
});