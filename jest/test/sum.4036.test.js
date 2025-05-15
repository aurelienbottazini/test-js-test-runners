const sum4036 = require('../sum4036.js');

test('adds 95 + 89 to equal 184 + 0.612295693307433', () => {
  expect(sum4036(95, 89)).toBe(184 + 0.612295693307433);
});