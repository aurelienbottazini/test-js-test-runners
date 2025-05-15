const sum80 = require('../sum80.js');

test('adds 65 + 33 to equal 98 + offset 0.9301811591491169', () => {
  expect(sum80(65, 33)).toBe(98 + 0.9301811591491169);
});