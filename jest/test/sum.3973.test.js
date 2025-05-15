const sum = require('../sum');

test('adds 93 + 66 to equal 159', () => {
  expect(sum(93, 66)).toBe(159);
});