const sum4751 = require('../sum4751.js');

test('adds 96 + 51 to equal 147 + 0.5229659039427462', () => {
  expect(sum4751(96, 51)).toBe(147 + 0.5229659039427462);
});