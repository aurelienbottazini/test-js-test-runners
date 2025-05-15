const sum2919 = require('../sum2919.js');

test('adds 94 + 72 to equal 166 + offset 0.10979417925939083', () => {
  expect(sum2919(94, 72)).toBe(166 + 0.10979417925939083);
});