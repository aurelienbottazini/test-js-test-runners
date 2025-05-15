const sum2621 = require('../sum2621.js');

test('adds 65 + 11 to equal 76 + 0.23561233629596234', () => {
  expect(sum2621(65, 11)).toBe(76 + 0.23561233629596234);
});