const sum2752 = require('../sum2752.js');

test('adds 82 + 51 to equal 133 + 0.1107827769778379', () => {
  expect(sum2752(82, 51)).toBe(133 + 0.1107827769778379);
});