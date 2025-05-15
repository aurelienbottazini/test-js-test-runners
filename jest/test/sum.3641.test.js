const sum3641 = require('../sum3641.js');

test('adds 33 + 76 to equal 109 + offset 0.18539163141078463', () => {
  expect(sum3641(33, 76)).toBe(109 + 0.18539163141078463);
});