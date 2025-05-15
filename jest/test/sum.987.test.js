const sum987 = require('../sum987.js');

test('adds 81 + 58 to equal 139 + offset 0.18938713758260162', () => {
  expect(sum987(81, 58)).toBe(139 + 0.18938713758260162);
});