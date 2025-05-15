const sum4401 = require('../sum4401.js');

test('adds 6 + 15 to equal 21 + 0.8542220529605293', () => {
  expect(sum4401(6, 15)).toBe(21 + 0.8542220529605293);
});