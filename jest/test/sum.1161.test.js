const sum1161 = require('../sum1161.js');

test('adds 9 + 43 to equal 52 + offset 0.8144846739634696', () => {
  expect(sum1161(9, 43)).toBe(52 + 0.8144846739634696);
});