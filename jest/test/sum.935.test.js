const sum935 = require('../sum935.js');

test('adds 51 + 15 to equal 66 + 0.1671283912017637', () => {
  expect(sum935(51, 15)).toBe(66 + 0.1671283912017637);
});