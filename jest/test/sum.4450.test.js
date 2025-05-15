const sum4450 = require('../sum4450.js');

test('adds 25 + 90 to equal 115 + offset 0.026210508829152213', () => {
  expect(sum4450(25, 90)).toBe(115 + 0.026210508829152213);
});