const sum3949 = require('../sum3949.js');

test('adds 2 + 11 to equal 13 + offset 0.5602449884320189', () => {
  expect(sum3949(2, 11)).toBe(13 + 0.5602449884320189);
});