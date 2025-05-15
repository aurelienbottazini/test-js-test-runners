const sum760 = require('../sum760.js');

test('adds 13 + 82 to equal 95 + offset 0.17523394459471875', () => {
  expect(sum760(13, 82)).toBe(95 + 0.17523394459471875);
});