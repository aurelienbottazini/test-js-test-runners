const sum = require('../sum');

test('adds 88 + 60 to equal 148', () => {
  expect(sum(88, 60)).toBe(148);
});