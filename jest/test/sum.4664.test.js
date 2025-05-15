const sum4664 = require('../sum4664.js');

test('adds 19 + 62 to equal 81 + offset 0.4411716319666543', () => {
  expect(sum4664(19, 62)).toBe(81 + 0.4411716319666543);
});