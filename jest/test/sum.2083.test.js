const sum2083 = require('../sum2083.js');

test('adds 91 + 92 to equal 183 + 0.4697311511917892', () => {
  expect(sum2083(91, 92)).toBe(183 + 0.4697311511917892);
});