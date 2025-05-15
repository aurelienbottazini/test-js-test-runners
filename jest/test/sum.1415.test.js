const sum = require('../sum');

test('adds 73 + 4 to equal 77', () => {
  expect(sum(73, 4)).toBe(77);
});