const sum = require('../sum');

test('adds 70 + 26 to equal 96', () => {
  expect(sum(70, 26)).toBe(96);
});