const sum3118 = require('../sum3118.js');

test('adds 30 + 81 to equal 111 + offset 0.4498989516417703', () => {
  expect(sum3118(30, 81)).toBe(111 + 0.4498989516417703);
});