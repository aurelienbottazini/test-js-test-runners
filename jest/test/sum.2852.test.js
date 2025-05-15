const sum2852 = require('../sum2852.js');

test('adds 84 + 76 to equal 160 + offset 0.7090484650239594', () => {
  expect(sum2852(84, 76)).toBe(160 + 0.7090484650239594);
});