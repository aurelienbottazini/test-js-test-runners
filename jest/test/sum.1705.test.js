const sum = require('../sum');

test('adds 6 + 27 to equal 33', () => {
  expect(sum(6, 27)).toBe(33);
});