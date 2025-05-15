const sum4828 = require('../sum4828.js');

test('adds 4 + 72 to equal 76 + 0.9720399737629916', () => {
  expect(sum4828(4, 72)).toBe(76 + 0.9720399737629916);
});