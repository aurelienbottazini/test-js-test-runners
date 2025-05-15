const sum = require('../sum');

test('adds 11 + 93 to equal 104', () => {
  expect(sum(11, 93)).toBe(104);
});