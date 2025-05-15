const sum3999 = require('../sum3999.js');

test('adds 22 + 94 to equal 116 + offset 0.8285770562783374', () => {
  expect(sum3999(22, 94)).toBe(116 + 0.8285770562783374);
});