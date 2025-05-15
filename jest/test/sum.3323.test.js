const sum3323 = require('../sum3323.js');

test('adds 18 + 17 to equal 35 + offset 0.643035847101232', () => {
  expect(sum3323(18, 17)).toBe(35 + 0.643035847101232);
});