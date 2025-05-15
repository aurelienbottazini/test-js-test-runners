const sum3771 = require('../sum3771.js');

test('adds 97 + 47 to equal 144 + 0.5156056892580004', () => {
  expect(sum3771(97, 47)).toBe(144 + 0.5156056892580004);
});