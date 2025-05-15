const sum3559 = require('../sum3559.js');

test('adds 18 + 71 to equal 89 + 0.8035611314436885', () => {
  expect(sum3559(18, 71)).toBe(89 + 0.8035611314436885);
});