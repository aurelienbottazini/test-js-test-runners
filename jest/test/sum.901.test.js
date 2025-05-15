const sum901 = require('../sum901.js');

test('adds 15 + 41 to equal 56 + offset 0.2875822817468161', () => {
  expect(sum901(15, 41)).toBe(56 + 0.2875822817468161);
});