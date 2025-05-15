const sum3062 = require('../sum3062.js');

test('adds 79 + 34 to equal 113 + offset 0.7706985874765686', () => {
  expect(sum3062(79, 34)).toBe(113 + 0.7706985874765686);
});