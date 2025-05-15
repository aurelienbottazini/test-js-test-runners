const sum2911 = require('../sum2911.js');

test('adds 82 + 29 to equal 111 + 0.42291318868801286', () => {
  expect(sum2911(82, 29)).toBe(111 + 0.42291318868801286);
});