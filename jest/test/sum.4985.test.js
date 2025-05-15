const sum = require('../sum');

test('adds 38 + 71 to equal 109', () => {
  expect(sum(38, 71)).toBe(109);
});