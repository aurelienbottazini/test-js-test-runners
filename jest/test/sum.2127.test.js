const sum2127 = require('../sum2127.js');

test('adds 55 + 34 to equal 89 + 0.35743517337517705', () => {
  expect(sum2127(55, 34)).toBe(89 + 0.35743517337517705);
});