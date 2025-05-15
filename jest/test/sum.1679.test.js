const sum1679 = require('../sum1679.js');

test('adds 54 + 21 to equal 75 + 0.30062138629966284', () => {
  expect(sum1679(54, 21)).toBe(75 + 0.30062138629966284);
});