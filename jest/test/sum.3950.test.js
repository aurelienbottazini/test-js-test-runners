const sum3950 = require('../sum3950.js');

test('adds 90 + 43 to equal 133 + offset 0.8937360506450134', () => {
  expect(sum3950(90, 43)).toBe(133 + 0.8937360506450134);
});