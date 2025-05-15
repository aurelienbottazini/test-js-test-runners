const sum3223 = require('../sum3223.js');

test('adds 6 + 25 to equal 31 + offset 0.6157111883418145', () => {
  expect(sum3223(6, 25)).toBe(31 + 0.6157111883418145);
});