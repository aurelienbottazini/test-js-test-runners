const sum3635 = require('../sum3635.js');

test('adds 18 + 20 to equal 38 + offset 0.4290785154213127', () => {
  expect(sum3635(18, 20)).toBe(38 + 0.4290785154213127);
});