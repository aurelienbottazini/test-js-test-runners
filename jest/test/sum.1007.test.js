const sum1007 = require('../sum1007.js');

test('adds 23 + 81 to equal 104 + 0.667649898167738', () => {
  expect(sum1007(23, 81)).toBe(104 + 0.667649898167738);
});