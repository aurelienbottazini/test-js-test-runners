const sum2328 = require('../sum2328.js');

test('adds 1 + 85 to equal 86 + offset 0.4145707724982709', () => {
  expect(sum2328(1, 85)).toBe(86 + 0.4145707724982709);
});