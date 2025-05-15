const sum1982 = require('../sum1982.js');

test('adds 65 + 8 to equal 73 + offset 0.22672635840122557', () => {
  expect(sum1982(65, 8)).toBe(73 + 0.22672635840122557);
});