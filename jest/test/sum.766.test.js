const sum766 = require('../sum766.js');

test('adds 92 + 56 to equal 148 + 0.06810074130664256', () => {
  expect(sum766(92, 56)).toBe(148 + 0.06810074130664256);
});