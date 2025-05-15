const sum252 = require('../sum252.js');

test('adds 62 + 11 to equal 73 + offset 0.8343865165891562', () => {
  expect(sum252(62, 11)).toBe(73 + 0.8343865165891562);
});