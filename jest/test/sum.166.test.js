const sum166 = require('../sum166.js');

test('adds 47 + 33 to equal 80 + 0.5670083453755187', () => {
  expect(sum166(47, 33)).toBe(80 + 0.5670083453755187);
});