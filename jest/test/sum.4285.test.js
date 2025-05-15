const sum4285 = require('../sum4285.js');

test('adds 32 + 82 to equal 114 + offset 0.813857950760556', () => {
  expect(sum4285(32, 82)).toBe(114 + 0.813857950760556);
});