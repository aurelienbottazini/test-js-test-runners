const sum4848 = require('../sum4848.js');

test('adds 1 + 52 to equal 53 + 0.7761795852581133', () => {
  expect(sum4848(1, 52)).toBe(53 + 0.7761795852581133);
});