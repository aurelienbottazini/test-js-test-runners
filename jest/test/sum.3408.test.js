const sum3408 = require('../sum3408.js');

test('adds 33 + 75 to equal 108 + 0.20845599582586805', () => {
  expect(sum3408(33, 75)).toBe(108 + 0.20845599582586805);
});