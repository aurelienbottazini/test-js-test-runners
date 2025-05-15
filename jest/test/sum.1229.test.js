const sum1229 = require('../sum1229.js');

test('adds 85 + 73 to equal 158 + 0.3194469444766924', () => {
  expect(sum1229(85, 73)).toBe(158 + 0.3194469444766924);
});