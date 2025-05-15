const sum = require('../sum');

test('adds 41 + 60 to equal 101', () => {
  expect(sum(41, 60)).toBe(101);
});