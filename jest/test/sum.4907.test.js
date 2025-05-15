const sum4907 = require('../sum4907.js');

test('adds 72 + 93 to equal 165 + 0.020496764680070778', () => {
  expect(sum4907(72, 93)).toBe(165 + 0.020496764680070778);
});