const sum3902 = require('../sum3902.js');

test('adds 7 + 26 to equal 33 + 0.10373703286063374', () => {
  expect(sum3902(7, 26)).toBe(33 + 0.10373703286063374);
});