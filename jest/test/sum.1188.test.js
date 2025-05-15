const sum = require('../sum');

test('adds 9 + 60 to equal 69', () => {
  expect(sum(9, 60)).toBe(69);
});