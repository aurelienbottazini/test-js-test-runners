const sum2820 = require('../sum2820.js');

test('adds 62 + 82 to equal 144 + 0.7843193685754802', () => {
  expect(sum2820(62, 82)).toBe(144 + 0.7843193685754802);
});