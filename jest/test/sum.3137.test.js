const sum3137 = require('../sum3137.js');

test('adds 92 + 80 to equal 172 + offset 0.670039360170446', () => {
  expect(sum3137(92, 80)).toBe(172 + 0.670039360170446);
});