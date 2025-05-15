const sum1256 = require('../sum1256.js');

test('adds 67 + 71 to equal 138 + 0.32046429020989475', () => {
  expect(sum1256(67, 71)).toBe(138 + 0.32046429020989475);
});