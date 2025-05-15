const sum859 = require('../sum859.js');

test('adds 62 + 39 to equal 101 + offset 0.9688303484496079', () => {
  expect(sum859(62, 39)).toBe(101 + 0.9688303484496079);
});