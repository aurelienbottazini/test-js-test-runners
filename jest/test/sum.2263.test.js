const sum2263 = require('../sum2263.js');

test('adds 99 + 30 to equal 129 + 0.1616270073182008', () => {
  expect(sum2263(99, 30)).toBe(129 + 0.1616270073182008);
});