const sum1773 = require('../sum1773.js');

test('adds 98 + 75 to equal 173 + offset 0.4382490282373447', () => {
  expect(sum1773(98, 75)).toBe(173 + 0.4382490282373447);
});