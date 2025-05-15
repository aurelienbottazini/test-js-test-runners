const sum3934 = require('../sum3934.js');

test('adds 81 + 95 to equal 176 + 0.20379198356802974', () => {
  expect(sum3934(81, 95)).toBe(176 + 0.20379198356802974);
});