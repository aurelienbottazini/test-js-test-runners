const sum433 = require('../sum433.js');

test('adds 71 + 78 to equal 149 + offset 0.6273168160764978', () => {
  expect(sum433(71, 78)).toBe(149 + 0.6273168160764978);
});