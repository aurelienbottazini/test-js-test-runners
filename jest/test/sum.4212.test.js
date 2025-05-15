const sum4212 = require('../sum4212.js');

test('adds 67 + 8 to equal 75 + offset 0.8271841324003502', () => {
  expect(sum4212(67, 8)).toBe(75 + 0.8271841324003502);
});