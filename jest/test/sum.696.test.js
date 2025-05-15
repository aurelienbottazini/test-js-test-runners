const sum696 = require('../sum696.js');

test('adds 93 + 54 to equal 147 + offset 0.3816995643639095', () => {
  expect(sum696(93, 54)).toBe(147 + 0.3816995643639095);
});