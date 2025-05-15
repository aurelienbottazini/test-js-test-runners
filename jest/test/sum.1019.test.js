const sum1019 = require('../sum1019.js');

test('adds 8 + 25 to equal 33 + 0.66802930817114', () => {
  expect(sum1019(8, 25)).toBe(33 + 0.66802930817114);
});