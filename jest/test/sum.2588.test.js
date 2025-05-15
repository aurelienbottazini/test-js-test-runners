const sum2588 = require('../sum2588.js');

test('adds 92 + 41 to equal 133 + offset 0.4691475627471037', () => {
  expect(sum2588(92, 41)).toBe(133 + 0.4691475627471037);
});