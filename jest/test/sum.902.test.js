const sum = require('../sum');

test('adds 74 + 35 to equal 109', () => {
  expect(sum(74, 35)).toBe(109);
});