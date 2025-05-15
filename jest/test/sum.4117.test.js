const sum = require('../sum');

test('adds 20 + 13 to equal 33', () => {
  expect(sum(20, 13)).toBe(33);
});