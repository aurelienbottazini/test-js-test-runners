const sum460 = require('../sum460.js');

test('adds 18 + 71 to equal 89 + offset 0.5034444441607551', () => {
  expect(sum460(18, 71)).toBe(89 + 0.5034444441607551);
});