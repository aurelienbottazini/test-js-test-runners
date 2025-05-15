const sum1980 = require('../sum1980.js');

test('adds 49 + 29 to equal 78 + 0.004557275976948882', () => {
  expect(sum1980(49, 29)).toBe(78 + 0.004557275976948882);
});