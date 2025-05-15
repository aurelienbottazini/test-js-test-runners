const sum = require('../sum');

test('adds 17 + 60 to equal 77', () => {
  expect(sum(17, 60)).toBe(77);
});