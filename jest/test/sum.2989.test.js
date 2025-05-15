const sum2989 = require('../sum2989.js');

test('adds 34 + 5 to equal 39 + offset 0.8414859188398113', () => {
  expect(sum2989(34, 5)).toBe(39 + 0.8414859188398113);
});