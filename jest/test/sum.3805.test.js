const sum3805 = require('../sum3805.js');

test('adds 99 + 32 to equal 131 + 0.4574744523455907', () => {
  expect(sum3805(99, 32)).toBe(131 + 0.4574744523455907);
});