const sum2865 = require('../sum2865.js');

test('adds 98 + 28 to equal 126 + offset 0.17992265328808132', () => {
  expect(sum2865(98, 28)).toBe(126 + 0.17992265328808132);
});