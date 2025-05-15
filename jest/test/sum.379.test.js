const sum379 = require('../sum379.js');

test('adds 25 + 26 to equal 51 + 0.7649047087615617', () => {
  expect(sum379(25, 26)).toBe(51 + 0.7649047087615617);
});