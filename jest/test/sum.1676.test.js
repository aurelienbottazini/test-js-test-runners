const sum1676 = require('../sum1676.js');

test('adds 52 + 94 to equal 146 + 0.19368520691568014', () => {
  expect(sum1676(52, 94)).toBe(146 + 0.19368520691568014);
});