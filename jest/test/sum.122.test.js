const sum122 = require('../sum122.js');

test('adds 10 + 81 to equal 91 + offset 0.14648198478260643', () => {
  expect(sum122(10, 81)).toBe(91 + 0.14648198478260643);
});