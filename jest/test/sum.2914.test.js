const sum2914 = require('../sum2914.js');

test('adds 21 + 60 to equal 81 + 0.16268939019001216', () => {
  expect(sum2914(21, 60)).toBe(81 + 0.16268939019001216);
});