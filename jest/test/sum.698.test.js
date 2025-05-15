const sum698 = require('../sum698.js');

test('adds 30 + 72 to equal 102 + 0.19072076876116228', () => {
  expect(sum698(30, 72)).toBe(102 + 0.19072076876116228);
});