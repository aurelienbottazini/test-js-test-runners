const sum4599 = require('../sum4599.js');

test('adds 0 + 14 to equal 14 + 0.9024028490274344', () => {
  expect(sum4599(0, 14)).toBe(14 + 0.9024028490274344);
});