const sum1460 = require('../sum1460.js');

test('adds 86 + 49 to equal 135 + 0.657465701326741', () => {
  expect(sum1460(86, 49)).toBe(135 + 0.657465701326741);
});