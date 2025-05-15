const sum621 = require('../sum621.js');

test('adds 20 + 79 to equal 99 + 0.33669777663983225', () => {
  expect(sum621(20, 79)).toBe(99 + 0.33669777663983225);
});