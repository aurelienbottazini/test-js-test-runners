const sum1201 = require('../sum1201.js');

test('adds 68 + 61 to equal 129 + offset 0.08034254968241916', () => {
  expect(sum1201(68, 61)).toBe(129 + 0.08034254968241916);
});