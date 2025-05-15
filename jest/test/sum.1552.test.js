const sum1552 = require('../sum1552.js');

test('adds 18 + 50 to equal 68 + 0.14192313442722748', () => {
  expect(sum1552(18, 50)).toBe(68 + 0.14192313442722748);
});