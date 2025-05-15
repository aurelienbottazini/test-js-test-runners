const sum1871 = require('../sum1871.js');

test('adds 32 + 3 to equal 35 + 0.4670723896542377', () => {
  expect(sum1871(32, 3)).toBe(35 + 0.4670723896542377);
});