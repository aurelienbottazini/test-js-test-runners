const sum235 = require('../sum235.js');

test('adds 34 + 18 to equal 52 + 0.7722763632394228', () => {
  expect(sum235(34, 18)).toBe(52 + 0.7722763632394228);
});