const sum433 = require('../sum433.js');

test('adds 22 + 42 to equal 64 + 0.2703658421559815', () => {
  expect(sum433(22, 42)).toBe(64 + 0.2703658421559815);
});