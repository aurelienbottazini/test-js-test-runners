const sum3020 = require('../sum3020.js');

test('adds 67 + 81 to equal 148 + 0.19129065322023364', () => {
  expect(sum3020(67, 81)).toBe(148 + 0.19129065322023364);
});