const sum = require('../sum');

test('adds 62 + 47 to equal 109', () => {
  expect(sum(62, 47)).toBe(109);
});