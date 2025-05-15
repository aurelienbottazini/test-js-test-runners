const sum = require('../sum');

test('adds 6 + 60 to equal 66', () => {
  expect(sum(6, 60)).toBe(66);
});