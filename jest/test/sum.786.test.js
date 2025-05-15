const sum786 = require('../sum786.js');

test('adds 69 + 54 to equal 123 + offset 0.11126066977534654', () => {
  expect(sum786(69, 54)).toBe(123 + 0.11126066977534654);
});