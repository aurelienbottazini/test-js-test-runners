const sum785 = require('../sum785.js');

test('adds 46 + 46 to equal 92 + 0.40468721432443167', () => {
  expect(sum785(46, 46)).toBe(92 + 0.40468721432443167);
});