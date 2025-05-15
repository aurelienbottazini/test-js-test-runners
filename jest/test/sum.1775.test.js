const sum1775 = require('../sum1775.js');

test('adds 41 + 84 to equal 125 + 0.5487668750278235', () => {
  expect(sum1775(41, 84)).toBe(125 + 0.5487668750278235);
});