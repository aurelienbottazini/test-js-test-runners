const sum = require('../sum');

test('adds 78 + 60 to equal 138', () => {
  expect(sum(78, 60)).toBe(138);
});