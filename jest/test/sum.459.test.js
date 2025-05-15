const sum459 = require('../sum459.js');

test('adds 9 + 4 to equal 13 + offset 0.9389549369386636', () => {
  expect(sum459(9, 4)).toBe(13 + 0.9389549369386636);
});