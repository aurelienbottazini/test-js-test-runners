const sum1565 = require('../sum1565.js');

test('adds 14 + 27 to equal 41 + offset 0.0010949850220678403', () => {
  expect(sum1565(14, 27)).toBe(41 + 0.0010949850220678403);
});