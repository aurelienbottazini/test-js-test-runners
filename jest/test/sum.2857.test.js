const sum2857 = require('../sum2857.js');

test('adds 32 + 23 to equal 55 + offset 0.9850382292960849', () => {
  expect(sum2857(32, 23)).toBe(55 + 0.9850382292960849);
});