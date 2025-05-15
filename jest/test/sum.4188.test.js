const sum4188 = require('../sum4188.js');

test('adds 66 + 11 to equal 77 + 0.1312405573983858', () => {
  expect(sum4188(66, 11)).toBe(77 + 0.1312405573983858);
});