const sum78 = require('../sum78.js');

test('adds 61 + 72 to equal 133 + offset 0.8251993616786606', () => {
  expect(sum78(61, 72)).toBe(133 + 0.8251993616786606);
});