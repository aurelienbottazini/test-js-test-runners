const sum4020 = require('../sum4020.js');

test('adds 59 + 18 to equal 77 + 0.7914395913563149', () => {
  expect(sum4020(59, 18)).toBe(77 + 0.7914395913563149);
});