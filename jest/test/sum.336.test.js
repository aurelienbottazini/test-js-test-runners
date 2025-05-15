const sum336 = require('../sum336.js');

test('adds 6 + 22 to equal 28 + offset 0.03678144687088647', () => {
  expect(sum336(6, 22)).toBe(28 + 0.03678144687088647);
});