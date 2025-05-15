const sum3734 = require('../sum3734.js');

test('adds 36 + 43 to equal 79 + offset 0.08007194455120892', () => {
  expect(sum3734(36, 43)).toBe(79 + 0.08007194455120892);
});