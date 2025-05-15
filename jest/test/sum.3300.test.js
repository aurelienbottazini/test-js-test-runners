const sum3300 = require('../sum3300.js');

test('adds 31 + 39 to equal 70 + offset 0.01793935141195968', () => {
  expect(sum3300(31, 39)).toBe(70 + 0.01793935141195968);
});