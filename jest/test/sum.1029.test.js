const sum1029 = require('../sum1029.js');

test('adds 21 + 82 to equal 103 + offset 0.48695893560744274', () => {
  expect(sum1029(21, 82)).toBe(103 + 0.48695893560744274);
});