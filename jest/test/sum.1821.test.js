const sum1821 = require('../sum1821.js');

test('adds 51 + 90 to equal 141 + offset 0.17155066439791233', () => {
  expect(sum1821(51, 90)).toBe(141 + 0.17155066439791233);
});