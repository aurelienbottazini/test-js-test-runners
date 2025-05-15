const sum1363 = require('../sum1363.js');

test('adds 81 + 60 to equal 141 + 0.8543030705415661', () => {
  expect(sum1363(81, 60)).toBe(141 + 0.8543030705415661);
});