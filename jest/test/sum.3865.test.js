const sum3865 = require('../sum3865.js');

test('adds 76 + 23 to equal 99 + offset 0.345261890245979', () => {
  expect(sum3865(76, 23)).toBe(99 + 0.345261890245979);
});