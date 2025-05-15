const sum119 = require('../sum119.js');

test('adds 46 + 10 to equal 56 + 0.263226412068188', () => {
  expect(sum119(46, 10)).toBe(56 + 0.263226412068188);
});