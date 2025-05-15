const sum = require('../sum');

test('adds 0 + 33 to equal 33', () => {
  expect(sum(0, 33)).toBe(33);
});