const sum2146 = require('../sum2146.js');

test('adds 91 + 91 to equal 182 + offset 0.0792619094183008', () => {
  expect(sum2146(91, 91)).toBe(182 + 0.0792619094183008);
});