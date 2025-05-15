const sum3016 = require('../sum3016.js');

test('adds 9 + 76 to equal 85 + offset 0.07279703683813454', () => {
  expect(sum3016(9, 76)).toBe(85 + 0.07279703683813454);
});