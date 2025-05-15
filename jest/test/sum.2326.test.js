const sum2326 = require('../sum2326.js');

test('adds 6 + 80 to equal 86 + offset 0.16419505633137432', () => {
  expect(sum2326(6, 80)).toBe(86 + 0.16419505633137432);
});