const sum2525 = require('../sum2525.js');

test('adds 49 + 8 to equal 57 + 0.0834196201847095', () => {
  expect(sum2525(49, 8)).toBe(57 + 0.0834196201847095);
});