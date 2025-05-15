const sum2959 = require('../sum2959.js');

test('adds 9 + 82 to equal 91 + offset 0.5941938559076111', () => {
  expect(sum2959(9, 82)).toBe(91 + 0.5941938559076111);
});