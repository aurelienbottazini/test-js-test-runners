const sum1671 = require('../sum1671.js');

test('adds 91 + 51 to equal 142 + 0.5261561760909477', () => {
  expect(sum1671(91, 51)).toBe(142 + 0.5261561760909477);
});