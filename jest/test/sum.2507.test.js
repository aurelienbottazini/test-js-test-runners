const sum2507 = require('../sum2507.js');

test('adds 44 + 10 to equal 54 + offset 0.36141910624994256', () => {
  expect(sum2507(44, 10)).toBe(54 + 0.36141910624994256);
});