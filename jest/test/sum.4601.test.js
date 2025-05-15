const sum4601 = require('../sum4601.js');

test('adds 75 + 70 to equal 145 + 0.8509919244755086', () => {
  expect(sum4601(75, 70)).toBe(145 + 0.8509919244755086);
});