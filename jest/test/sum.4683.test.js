const sum4683 = require('../sum4683.js');

test('adds 29 + 33 to equal 62 + offset 0.7972808864284964', () => {
  expect(sum4683(29, 33)).toBe(62 + 0.7972808864284964);
});