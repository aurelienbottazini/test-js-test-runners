const sum88 = require('../sum88.js');

test('adds 96 + 63 to equal 159 + 0.10508921892334466', () => {
  expect(sum88(96, 63)).toBe(159 + 0.10508921892334466);
});