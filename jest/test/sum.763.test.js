const sum763 = require('../sum763.js');

test('adds 13 + 67 to equal 80 + 0.8450177112412157', () => {
  expect(sum763(13, 67)).toBe(80 + 0.8450177112412157);
});