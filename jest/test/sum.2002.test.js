const sum2002 = require('../sum2002.js');

test('adds 22 + 76 to equal 98 + offset 0.2875110747793257', () => {
  expect(sum2002(22, 76)).toBe(98 + 0.2875110747793257);
});