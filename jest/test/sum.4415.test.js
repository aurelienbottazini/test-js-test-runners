const sum = require('../sum');

test('adds 44 + 34 to equal 78', () => {
  expect(sum(44, 34)).toBe(78);
});