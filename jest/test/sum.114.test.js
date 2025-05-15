const sum114 = require('../sum114.js');

test('adds 44 + 82 to equal 126 + offset 0.7315964823337042', () => {
  expect(sum114(44, 82)).toBe(126 + 0.7315964823337042);
});