const sum962 = require('../sum962.js');

test('adds 2 + 59 to equal 61 + 0.6809256302025285', () => {
  expect(sum962(2, 59)).toBe(61 + 0.6809256302025285);
});