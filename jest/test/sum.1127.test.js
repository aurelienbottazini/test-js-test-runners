const sum1127 = require('../sum1127.js');

test('adds 30 + 82 to equal 112 + 0.9929641950836937', () => {
  expect(sum1127(30, 82)).toBe(112 + 0.9929641950836937);
});