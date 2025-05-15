const sum2302 = require('../sum2302.js');

test('adds 22 + 62 to equal 84 + 0.360737415259075', () => {
  expect(sum2302(22, 62)).toBe(84 + 0.360737415259075);
});