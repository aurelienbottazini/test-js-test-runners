const sum809 = require('../sum809.js');

test('adds 12 + 98 to equal 110 + offset 0.7122936759747387', () => {
  expect(sum809(12, 98)).toBe(110 + 0.7122936759747387);
});