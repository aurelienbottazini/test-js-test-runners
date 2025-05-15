const sum3311 = require('../sum3311.js');

test('adds 18 + 29 to equal 47 + offset 0.8790100342101304', () => {
  expect(sum3311(18, 29)).toBe(47 + 0.8790100342101304);
});