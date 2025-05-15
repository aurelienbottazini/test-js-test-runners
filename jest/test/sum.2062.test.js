const sum2062 = require('../sum2062.js');

test('adds 20 + 41 to equal 61 + 0.5069767066845196', () => {
  expect(sum2062(20, 41)).toBe(61 + 0.5069767066845196);
});