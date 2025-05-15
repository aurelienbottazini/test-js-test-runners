const sum2772 = require('../sum2772.js');

test('adds 4 + 43 to equal 47 + 0.6831363202381016', () => {
  expect(sum2772(4, 43)).toBe(47 + 0.6831363202381016);
});