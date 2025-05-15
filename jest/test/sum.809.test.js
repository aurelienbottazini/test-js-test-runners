const sum809 = require('../sum809.js');

test('adds 1 + 4 to equal 5 + 0.03066588180824248', () => {
  expect(sum809(1, 4)).toBe(5 + 0.03066588180824248);
});