const sum79 = require('../sum79.js');

test('adds 49 + 29 to equal 78 + 0.8760088493744451', () => {
  expect(sum79(49, 29)).toBe(78 + 0.8760088493744451);
});