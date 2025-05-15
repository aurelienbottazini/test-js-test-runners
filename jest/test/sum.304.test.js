const sum304 = require('../sum304.js');

test('adds 73 + 29 to equal 102 + 0.293503491796713', () => {
  expect(sum304(73, 29)).toBe(102 + 0.293503491796713);
});