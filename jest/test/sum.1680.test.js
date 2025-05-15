const sum1680 = require('../sum1680.js');

test('adds 78 + 38 to equal 116 + 0.7799002450466481', () => {
  expect(sum1680(78, 38)).toBe(116 + 0.7799002450466481);
});