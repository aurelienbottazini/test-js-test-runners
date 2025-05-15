const sum3704 = require('../sum3704.js');

test('adds 28 + 98 to equal 126 + 0.8949064418427525', () => {
  expect(sum3704(28, 98)).toBe(126 + 0.8949064418427525);
});