const sum2473 = require('../sum2473.js');

test('adds 82 + 4 to equal 86 + 0.3520432124866648', () => {
  expect(sum2473(82, 4)).toBe(86 + 0.3520432124866648);
});