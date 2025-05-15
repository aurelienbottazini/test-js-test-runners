const sum1211 = require('../sum1211.js');

test('adds 43 + 69 to equal 112 + offset 0.2706608289632192', () => {
  expect(sum1211(43, 69)).toBe(112 + 0.2706608289632192);
});