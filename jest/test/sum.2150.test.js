const sum2150 = require('../sum2150.js');

test('adds 18 + 21 to equal 39 + 0.3595427700918705', () => {
  expect(sum2150(18, 21)).toBe(39 + 0.3595427700918705);
});