const sum = require('../sum');

test('adds 57 + 33 to equal 90', () => {
  expect(sum(57, 33)).toBe(90);
});