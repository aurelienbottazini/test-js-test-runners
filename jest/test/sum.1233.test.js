const sum1233 = require('../sum1233.js');

test('adds 67 + 4 to equal 71 + 0.38715073690882906', () => {
  expect(sum1233(67, 4)).toBe(71 + 0.38715073690882906);
});