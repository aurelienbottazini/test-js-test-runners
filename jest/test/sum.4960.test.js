const sum4960 = require('../sum4960.js');

test('adds 12 + 89 to equal 101 + offset 0.6252758926112869', () => {
  expect(sum4960(12, 89)).toBe(101 + 0.6252758926112869);
});