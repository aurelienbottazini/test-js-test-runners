const sum4942 = require('../sum4942.js');

test('adds 69 + 72 to equal 141 + 0.059142115932995676', () => {
  expect(sum4942(69, 72)).toBe(141 + 0.059142115932995676);
});