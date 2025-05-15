const sum129 = require('../sum129.js');

test('adds 80 + 54 to equal 134 + offset 0.9458287597469129', () => {
  expect(sum129(80, 54)).toBe(134 + 0.9458287597469129);
});