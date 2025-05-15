const sum = require('../sum');

test('adds 8 + 60 to equal 68', () => {
  expect(sum(8, 60)).toBe(68);
});