const sum186 = require('../sum186.js');

test('adds 25 + 11 to equal 36 + offset 0.6232992128948196', () => {
  expect(sum186(25, 11)).toBe(36 + 0.6232992128948196);
});