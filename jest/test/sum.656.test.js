const sum656 = require('../sum656.js');

test('adds 73 + 35 to equal 108 + 0.3890342143462914', () => {
  expect(sum656(73, 35)).toBe(108 + 0.3890342143462914);
});