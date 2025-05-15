const sum1117 = require('../sum1117.js');

test('adds 14 + 97 to equal 111 + offset 0.26595313637008133', () => {
  expect(sum1117(14, 97)).toBe(111 + 0.26595313637008133);
});