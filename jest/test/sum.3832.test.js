const sum = require('../sum');

test('adds 33 + 57 to equal 90', () => {
  expect(sum(33, 57)).toBe(90);
});