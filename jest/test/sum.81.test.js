const sum81 = require('../sum81.js');

test('adds 16 + 6 to equal 22 + offset 0.37661711561304845', () => {
  expect(sum81(16, 6)).toBe(22 + 0.37661711561304845);
});