const sum33 = require('../sum33.js');

test('adds 22 + 78 to equal 100 + offset 0.20029506258460605', () => {
  expect(sum33(22, 78)).toBe(100 + 0.20029506258460605);
});