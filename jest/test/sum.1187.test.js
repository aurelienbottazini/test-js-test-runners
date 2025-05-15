const sum1187 = require('../sum1187.js');

test('adds 16 + 19 to equal 35 + offset 0.5200106638041502', () => {
  expect(sum1187(16, 19)).toBe(35 + 0.5200106638041502);
});