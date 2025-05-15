const sum3716 = require('../sum3716.js');

test('adds 40 + 20 to equal 60 + 0.8281851411189438', () => {
  expect(sum3716(40, 20)).toBe(60 + 0.8281851411189438);
});