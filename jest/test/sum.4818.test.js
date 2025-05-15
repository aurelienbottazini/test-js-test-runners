const sum4818 = require('../sum4818.js');

test('adds 93 + 54 to equal 147 + 0.5823359415376523', () => {
  expect(sum4818(93, 54)).toBe(147 + 0.5823359415376523);
});