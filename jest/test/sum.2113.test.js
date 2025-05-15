const sum = require('../sum');

test('adds 93 + 52 to equal 145', () => {
  expect(sum(93, 52)).toBe(145);
});