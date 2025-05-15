const sum4985 = require('../sum4985.js');

test('adds 14 + 36 to equal 50 + offset 0.6551196410705066', () => {
  expect(sum4985(14, 36)).toBe(50 + 0.6551196410705066);
});