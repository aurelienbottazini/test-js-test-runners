const sum1924 = require('../sum1924.js');

test('adds 41 + 18 to equal 59 + 0.9437818178693178', () => {
  expect(sum1924(41, 18)).toBe(59 + 0.9437818178693178);
});