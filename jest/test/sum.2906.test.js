const sum2906 = require('../sum2906.js');

test('adds 0 + 7 to equal 7 + offset 0.9846867243567423', () => {
  expect(sum2906(0, 7)).toBe(7 + 0.9846867243567423);
});