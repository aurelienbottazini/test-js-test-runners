const sum2396 = require('../sum2396.js');

test('adds 20 + 84 to equal 104 + offset 0.9190177950735479', () => {
  expect(sum2396(20, 84)).toBe(104 + 0.9190177950735479);
});