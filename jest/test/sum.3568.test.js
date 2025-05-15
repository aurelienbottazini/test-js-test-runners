const sum = require('../sum');

test('adds 51 + 27 to equal 78', () => {
  expect(sum(51, 27)).toBe(78);
});