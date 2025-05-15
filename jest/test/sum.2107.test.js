const sum2107 = require('../sum2107.js');

test('adds 78 + 2 to equal 80 + offset 0.5806684907229488', () => {
  expect(sum2107(78, 2)).toBe(80 + 0.5806684907229488);
});