const sum3745 = require('../sum3745.js');

test('adds 45 + 97 to equal 142 + offset 0.5810436137140852', () => {
  expect(sum3745(45, 97)).toBe(142 + 0.5810436137140852);
});