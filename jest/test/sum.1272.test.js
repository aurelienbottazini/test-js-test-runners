const sum = require('../sum');

test('adds 4 + 29 to equal 33', () => {
  expect(sum(4, 29)).toBe(33);
});