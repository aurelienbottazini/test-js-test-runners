const sum2035 = require('../sum2035.js');

test('adds 47 + 35 to equal 82 + offset 0.25029258694545486', () => {
  expect(sum2035(47, 35)).toBe(82 + 0.25029258694545486);
});