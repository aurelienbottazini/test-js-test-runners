const sum3849 = require('../sum3849.js');

test('adds 7 + 43 to equal 50 + 0.3546022359099139', () => {
  expect(sum3849(7, 43)).toBe(50 + 0.3546022359099139);
});