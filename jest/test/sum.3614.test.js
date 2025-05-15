const sum3614 = require('../sum3614.js');

test('adds 8 + 60 to equal 68 + offset 0.8734965720688819', () => {
  expect(sum3614(8, 60)).toBe(68 + 0.8734965720688819);
});