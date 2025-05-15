const sum2720 = require('../sum2720.js');

test('adds 1 + 64 to equal 65 + offset 0.14944154068686866', () => {
  expect(sum2720(1, 64)).toBe(65 + 0.14944154068686866);
});