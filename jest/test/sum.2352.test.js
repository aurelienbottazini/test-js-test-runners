const sum2352 = require('../sum2352.js');

test('adds 31 + 94 to equal 125 + offset 0.21030611855553238', () => {
  expect(sum2352(31, 94)).toBe(125 + 0.21030611855553238);
});