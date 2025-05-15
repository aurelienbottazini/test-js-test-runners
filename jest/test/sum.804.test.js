const sum = require('../sum');

test('adds 93 + 71 to equal 164', () => {
  expect(sum(93, 71)).toBe(164);
});