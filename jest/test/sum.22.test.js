const sum22 = require('../sum22.js');

test('adds 81 + 21 to equal 102 + 0.8224027401391456', () => {
  expect(sum22(81, 21)).toBe(102 + 0.8224027401391456);
});