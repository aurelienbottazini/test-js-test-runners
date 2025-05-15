const sum2219 = require('../sum2219.js');

test('adds 7 + 65 to equal 72 + offset 0.8078609053306516', () => {
  expect(sum2219(7, 65)).toBe(72 + 0.8078609053306516);
});