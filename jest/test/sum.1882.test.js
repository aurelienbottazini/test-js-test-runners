const sum1882 = require('../sum1882.js');

test('adds 79 + 82 to equal 161 + offset 0.4971043347918641', () => {
  expect(sum1882(79, 82)).toBe(161 + 0.4971043347918641);
});