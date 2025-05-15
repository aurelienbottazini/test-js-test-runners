const sum4700 = require('../sum4700.js');

test('adds 3 + 12 to equal 15 + 0.2969776864669742', () => {
  expect(sum4700(3, 12)).toBe(15 + 0.2969776864669742);
});