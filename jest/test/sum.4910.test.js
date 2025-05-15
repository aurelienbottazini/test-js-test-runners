const sum = require('../sum');

test('adds 59 + 60 to equal 119', () => {
  expect(sum(59, 60)).toBe(119);
});