const sum2932 = require('../sum2932.js');

test('adds 77 + 68 to equal 145 + offset 0.3001454053378353', () => {
  expect(sum2932(77, 68)).toBe(145 + 0.3001454053378353);
});