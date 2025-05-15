const sum755 = require('../sum755.js');

test('adds 49 + 29 to equal 78 + offset 0.4888029464805127', () => {
  expect(sum755(49, 29)).toBe(78 + 0.4888029464805127);
});