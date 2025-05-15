const sum4145 = require('../sum4145.js');

test('adds 12 + 30 to equal 42 + 0.709696512891583', () => {
  expect(sum4145(12, 30)).toBe(42 + 0.709696512891583);
});