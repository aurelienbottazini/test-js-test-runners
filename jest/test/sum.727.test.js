const sum = require('../sum');

test('adds 82 + 93 to equal 175', () => {
  expect(sum(82, 93)).toBe(175);
});