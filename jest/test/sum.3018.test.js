const sum = require('../sum');

test('adds 19 + 14 to equal 33', () => {
  expect(sum(19, 14)).toBe(33);
});