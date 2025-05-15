const sum2859 = require('../sum2859.js');

test('adds 40 + 47 to equal 87 + 0.09625006181781182', () => {
  expect(sum2859(40, 47)).toBe(87 + 0.09625006181781182);
});