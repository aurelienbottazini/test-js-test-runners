const sum = require('../sum');

test('adds 71 + 60 to equal 131', () => {
  expect(sum(71, 60)).toBe(131);
});