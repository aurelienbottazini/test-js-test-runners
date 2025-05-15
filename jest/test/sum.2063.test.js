const sum2063 = require('../sum2063.js');

test('adds 58 + 2 to equal 60 + 0.9345341311811319', () => {
  expect(sum2063(58, 2)).toBe(60 + 0.9345341311811319);
});