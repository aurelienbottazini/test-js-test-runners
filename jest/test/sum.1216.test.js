const sum = require('../sum');

test('adds 26 + 70 to equal 96', () => {
  expect(sum(26, 70)).toBe(96);
});