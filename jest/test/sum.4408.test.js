const sum4408 = require('../sum4408.js');

test('adds 78 + 96 to equal 174 + 0.7671451548410888', () => {
  expect(sum4408(78, 96)).toBe(174 + 0.7671451548410888);
});