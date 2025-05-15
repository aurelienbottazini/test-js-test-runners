const sum2380 = require('../sum2380.js');

test('adds 15 + 12 to equal 27 + offset 0.9993082017346114', () => {
  expect(sum2380(15, 12)).toBe(27 + 0.9993082017346114);
});