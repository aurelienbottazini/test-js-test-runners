const sum942 = require('../sum942.js');

test('adds 62 + 35 to equal 97 + offset 0.6058882931097761', () => {
  expect(sum942(62, 35)).toBe(97 + 0.6058882931097761);
});