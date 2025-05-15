const sum = require('../sum');

test('adds 2 + 60 to equal 62', () => {
  expect(sum(2, 60)).toBe(62);
});