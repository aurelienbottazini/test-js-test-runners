const sum3696 = require('../sum3696.js');

test('adds 44 + 17 to equal 61 + 0.3162504477314303', () => {
  expect(sum3696(44, 17)).toBe(61 + 0.3162504477314303);
});