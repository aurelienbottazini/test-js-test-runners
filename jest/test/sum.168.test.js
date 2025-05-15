const sum168 = require('../sum168.js');

test('adds 42 + 8 to equal 50 + offset 0.7403214896920356', () => {
  expect(sum168(42, 8)).toBe(50 + 0.7403214896920356);
});