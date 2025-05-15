const sum = require('../sum');

test('adds 90 + 19 to equal 109', () => {
  expect(sum(90, 19)).toBe(109);
});