const sum3857 = require('../sum3857.js');

test('adds 91 + 76 to equal 167 + 0.8593207544295036', () => {
  expect(sum3857(91, 76)).toBe(167 + 0.8593207544295036);
});