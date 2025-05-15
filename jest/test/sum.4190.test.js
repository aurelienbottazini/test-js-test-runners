const sum = require('../sum');

test('adds 16 + 60 to equal 76', () => {
  expect(sum(16, 60)).toBe(76);
});