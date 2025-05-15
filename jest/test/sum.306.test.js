const sum306 = require('../sum306.js');

test('adds 48 + 77 to equal 125 + 0.8001107527893208', () => {
  expect(sum306(48, 77)).toBe(125 + 0.8001107527893208);
});