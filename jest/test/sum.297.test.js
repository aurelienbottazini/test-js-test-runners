const sum297 = require('../sum297.js');

test('adds 72 + 43 to equal 115 + offset 0.3922257063399728', () => {
  expect(sum297(72, 43)).toBe(115 + 0.3922257063399728);
});