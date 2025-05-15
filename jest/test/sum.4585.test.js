const sum4585 = require('../sum4585.js');

test('adds 46 + 94 to equal 140 + 0.46678613871442165', () => {
  expect(sum4585(46, 94)).toBe(140 + 0.46678613871442165);
});