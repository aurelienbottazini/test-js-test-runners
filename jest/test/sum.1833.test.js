const sum = require('../sum');

test('adds 13 + 96 to equal 109', () => {
  expect(sum(13, 96)).toBe(109);
});