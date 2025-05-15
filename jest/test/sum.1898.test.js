const sum1898 = require('../sum1898.js');

test('adds 89 + 43 to equal 132 + 0.6056197210108314', () => {
  expect(sum1898(89, 43)).toBe(132 + 0.6056197210108314);
});