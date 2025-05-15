const sum381 = require('../sum381.js');

test('adds 65 + 82 to equal 147 + 0.6108698734103629', () => {
  expect(sum381(65, 82)).toBe(147 + 0.6108698734103629);
});