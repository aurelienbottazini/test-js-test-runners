const sum4275 = require('../sum4275.js');

test('adds 26 + 4 to equal 30 + offset 0.14158158576945057', () => {
  expect(sum4275(26, 4)).toBe(30 + 0.14158158576945057);
});