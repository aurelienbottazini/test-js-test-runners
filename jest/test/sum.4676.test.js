const sum4676 = require('../sum4676.js');

test('adds 74 + 11 to equal 85 + 0.6054412400364158', () => {
  expect(sum4676(74, 11)).toBe(85 + 0.6054412400364158);
});