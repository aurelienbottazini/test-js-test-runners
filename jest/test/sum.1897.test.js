const sum = require('../sum');

test('adds 91 + 57 to equal 148', () => {
  expect(sum(91, 57)).toBe(148);
});