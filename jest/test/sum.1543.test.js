const sum1543 = require('../sum1543.js');

test('adds 31 + 67 to equal 98 + offset 0.5116189120772674', () => {
  expect(sum1543(31, 67)).toBe(98 + 0.5116189120772674);
});