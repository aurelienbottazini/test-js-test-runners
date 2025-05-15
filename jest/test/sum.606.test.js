const sum606 = require('../sum606.js');

test('adds 31 + 7 to equal 38 + offset 0.03306475829559674', () => {
  expect(sum606(31, 7)).toBe(38 + 0.03306475829559674);
});