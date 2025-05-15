const sum1295 = require('../sum1295.js');

test('adds 65 + 52 to equal 117 + 0.4700818476026303', () => {
  expect(sum1295(65, 52)).toBe(117 + 0.4700818476026303);
});