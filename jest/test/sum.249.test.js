const sum249 = require('../sum249.js');

test('adds 60 + 3 to equal 63 + offset 0.03998846863284744', () => {
  expect(sum249(60, 3)).toBe(63 + 0.03998846863284744);
});