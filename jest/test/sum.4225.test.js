const sum4225 = require('../sum4225.js');

test('adds 72 + 73 to equal 145 + 0.958034747178705', () => {
  expect(sum4225(72, 73)).toBe(145 + 0.958034747178705);
});