const sum3515 = require('../sum3515.js');

test('adds 67 + 4 to equal 71 + offset 0.5894469276524072', () => {
  expect(sum3515(67, 4)).toBe(71 + 0.5894469276524072);
});