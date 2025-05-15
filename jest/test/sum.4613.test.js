const sum4613 = require('../sum4613.js');

test('adds 14 + 18 to equal 32 + 0.010371695954735749', () => {
  expect(sum4613(14, 18)).toBe(32 + 0.010371695954735749);
});