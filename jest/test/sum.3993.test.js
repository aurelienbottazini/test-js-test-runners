const sum3993 = require('../sum3993.js');

test('adds 33 + 3 to equal 36 + offset 0.44756998720659835', () => {
  expect(sum3993(33, 3)).toBe(36 + 0.44756998720659835);
});