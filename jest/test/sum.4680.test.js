const sum4680 = require('../sum4680.js');

test('adds 76 + 67 to equal 143 + 0.6057358933335004', () => {
  expect(sum4680(76, 67)).toBe(143 + 0.6057358933335004);
});