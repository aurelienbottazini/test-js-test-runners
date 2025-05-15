const sum = require('../sum');

test('adds 93 + 16 to equal 109', () => {
  expect(sum(93, 16)).toBe(109);
});