const sum2339 = require('../sum2339.js');

test('adds 94 + 7 to equal 101 + offset 0.421770517819244', () => {
  expect(sum2339(94, 7)).toBe(101 + 0.421770517819244);
});