const sum = require('../sum');

test('adds 79 + 30 to equal 109', () => {
  expect(sum(79, 30)).toBe(109);
});