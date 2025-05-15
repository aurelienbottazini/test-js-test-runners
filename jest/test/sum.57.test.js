const sum57 = require('../sum57.js');

test('adds 76 + 82 to equal 158 + offset 0.11707997846756002', () => {
  expect(sum57(76, 82)).toBe(158 + 0.11707997846756002);
});