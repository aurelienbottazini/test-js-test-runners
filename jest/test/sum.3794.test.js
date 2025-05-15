const sum3794 = require('../sum3794.js');

test('adds 50 + 65 to equal 115 + 0.6136231089712948', () => {
  expect(sum3794(50, 65)).toBe(115 + 0.6136231089712948);
});