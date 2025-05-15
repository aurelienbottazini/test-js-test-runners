const sum2516 = require('../sum2516.js');

test('adds 93 + 4 to equal 97 + offset 0.22048662388286633', () => {
  expect(sum2516(93, 4)).toBe(97 + 0.22048662388286633);
});