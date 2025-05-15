const sum1340 = require('../sum1340.js');

test('adds 2 + 97 to equal 99 + 0.21870491340416542', () => {
  expect(sum1340(2, 97)).toBe(99 + 0.21870491340416542);
});