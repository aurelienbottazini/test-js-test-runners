const sum = require('../sum');

test('adds 52 + 57 to equal 109', () => {
  expect(sum(52, 57)).toBe(109);
});