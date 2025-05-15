const sum3968 = require('../sum3968.js');

test('adds 29 + 92 to equal 121 + offset 0.9206010465196941', () => {
  expect(sum3968(29, 92)).toBe(121 + 0.9206010465196941);
});