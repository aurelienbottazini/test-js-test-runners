const sum962 = require('../sum962.js');

test('adds 38 + 14 to equal 52 + offset 0.31921804984888347', () => {
  expect(sum962(38, 14)).toBe(52 + 0.31921804984888347);
});