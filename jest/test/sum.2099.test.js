const sum = require('../sum');

test('adds 7 + 26 to equal 33', () => {
  expect(sum(7, 26)).toBe(33);
});