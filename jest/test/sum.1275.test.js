const sum = require('../sum');

test('adds 90 + 60 to equal 150', () => {
  expect(sum(90, 60)).toBe(150);
});