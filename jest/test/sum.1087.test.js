const sum = require('../sum');

test('adds 53 + 43 to equal 96', () => {
  expect(sum(53, 43)).toBe(96);
});