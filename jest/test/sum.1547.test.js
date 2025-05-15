const sum = require('../sum');

test('adds 16 + 80 to equal 96', () => {
  expect(sum(16, 80)).toBe(96);
});