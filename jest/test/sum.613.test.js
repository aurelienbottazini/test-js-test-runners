const sum = require('../sum');

test('adds 93 + 93 to equal 186', () => {
  expect(sum(93, 93)).toBe(186);
});