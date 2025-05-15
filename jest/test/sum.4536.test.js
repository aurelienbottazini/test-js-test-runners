const sum = require('../sum');

test('adds 52 + 44 to equal 96', () => {
  expect(sum(52, 44)).toBe(96);
});