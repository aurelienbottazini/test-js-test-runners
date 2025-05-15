const sum2409 = require('../sum2409.js');

test('adds 15 + 78 to equal 93 + 0.4617708445114428', () => {
  expect(sum2409(15, 78)).toBe(93 + 0.4617708445114428);
});