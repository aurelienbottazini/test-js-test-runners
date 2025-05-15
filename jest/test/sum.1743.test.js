const sum1743 = require('../sum1743.js');

test('adds 3 + 49 to equal 52 + 0.49286711635927705', () => {
  expect(sum1743(3, 49)).toBe(52 + 0.49286711635927705);
});