const sum = require('../sum');

test('adds 1 + 95 to equal 96', () => {
  expect(sum(1, 95)).toBe(96);
});