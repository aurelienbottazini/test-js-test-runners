const sum3024 = require('../sum3024.js');

test('adds 17 + 78 to equal 95 + 0.6348575690920996', () => {
  expect(sum3024(17, 78)).toBe(95 + 0.6348575690920996);
});