const sum3155 = require('../sum3155.js');

test('adds 1 + 84 to equal 85 + offset 0.3561055104557397', () => {
  expect(sum3155(1, 84)).toBe(85 + 0.3561055104557397);
});