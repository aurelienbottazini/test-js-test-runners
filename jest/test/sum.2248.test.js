const sum2248 = require('../sum2248.js');

test('adds 11 + 73 to equal 84 + 0.24070162716127896', () => {
  expect(sum2248(11, 73)).toBe(84 + 0.24070162716127896);
});