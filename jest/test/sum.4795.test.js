const sum4795 = require('../sum4795.js');

test('adds 30 + 96 to equal 126 + 0.3582701544260791', () => {
  expect(sum4795(30, 96)).toBe(126 + 0.3582701544260791);
});