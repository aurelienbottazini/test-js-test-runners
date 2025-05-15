const sum3943 = require('../sum3943.js');

test('adds 0 + 62 to equal 62 + offset 0.9408918998534523', () => {
  expect(sum3943(0, 62)).toBe(62 + 0.9408918998534523);
});