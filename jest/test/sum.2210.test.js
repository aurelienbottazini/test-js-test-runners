const sum2210 = require('../sum2210.js');

test('adds 26 + 57 to equal 83 + offset 0.40737101095281436', () => {
  expect(sum2210(26, 57)).toBe(83 + 0.40737101095281436);
});