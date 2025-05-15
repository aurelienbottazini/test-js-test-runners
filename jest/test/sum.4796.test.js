const sum4796 = require('../sum4796.js');

test('adds 47 + 82 to equal 129 + 0.6060933104093433', () => {
  expect(sum4796(47, 82)).toBe(129 + 0.6060933104093433);
});