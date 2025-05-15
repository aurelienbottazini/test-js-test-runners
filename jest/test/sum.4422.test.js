const sum = require('../sum');

test('adds 62 + 7 to equal 69', () => {
  expect(sum(62, 7)).toBe(69);
});