const sum4215 = require('../sum4215.js');

test('adds 72 + 54 to equal 126 + 0.991143561042469', () => {
  expect(sum4215(72, 54)).toBe(126 + 0.991143561042469);
});