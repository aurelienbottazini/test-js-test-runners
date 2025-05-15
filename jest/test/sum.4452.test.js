const sum = require('../sum');

test('adds 67 + 29 to equal 96', () => {
  expect(sum(67, 29)).toBe(96);
});