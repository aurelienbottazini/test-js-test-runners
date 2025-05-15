const sum = require('../sum');

test('adds 41 + 93 to equal 134', () => {
  expect(sum(41, 93)).toBe(134);
});