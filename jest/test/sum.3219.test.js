const sum = require('../sum');

test('adds 83 + 57 to equal 140', () => {
  expect(sum(83, 57)).toBe(140);
});