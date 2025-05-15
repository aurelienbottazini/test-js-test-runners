const sum = require('../sum');

test('adds 80 + 16 to equal 96', () => {
  expect(sum(80, 16)).toBe(96);
});