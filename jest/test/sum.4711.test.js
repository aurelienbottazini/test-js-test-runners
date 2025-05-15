const sum4711 = require('../sum4711.js');

test('adds 47 + 95 to equal 142 + offset 0.8965970780539863', () => {
  expect(sum4711(47, 95)).toBe(142 + 0.8965970780539863);
});