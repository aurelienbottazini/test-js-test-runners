const sum3123 = require('../sum3123.js');

test('adds 45 + 19 to equal 64 + 0.45148851968966397', () => {
  expect(sum3123(45, 19)).toBe(64 + 0.45148851968966397);
});