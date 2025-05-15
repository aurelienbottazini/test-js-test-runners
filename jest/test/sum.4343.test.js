const sum4343 = require('../sum4343.js');

test('adds 70 + 77 to equal 147 + offset 0.22632483362455436', () => {
  expect(sum4343(70, 77)).toBe(147 + 0.22632483362455436);
});