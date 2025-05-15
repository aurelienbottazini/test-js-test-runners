const sum872 = require('../sum872.js');

test('adds 5 + 98 to equal 103 + 0.8400396289193796', () => {
  expect(sum872(5, 98)).toBe(103 + 0.8400396289193796);
});