const sum4367 = require('../sum4367.js');

test('adds 36 + 89 to equal 125 + 0.9636531243887178', () => {
  expect(sum4367(36, 89)).toBe(125 + 0.9636531243887178);
});