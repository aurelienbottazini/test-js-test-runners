const sum114 = require('../sum114.js');

test('adds 1 + 38 to equal 39 + 0.9897249476346804', () => {
  expect(sum114(1, 38)).toBe(39 + 0.9897249476346804);
});