const sum2829 = require('../sum2829.js');

test('adds 41 + 23 to equal 64 + 0.00813583645278848', () => {
  expect(sum2829(41, 23)).toBe(64 + 0.00813583645278848);
});