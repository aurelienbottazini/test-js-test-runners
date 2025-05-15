const sum986 = require('../sum986.js');

test('adds 65 + 54 to equal 119 + offset 0.6248439197517878', () => {
  expect(sum986(65, 54)).toBe(119 + 0.6248439197517878);
});