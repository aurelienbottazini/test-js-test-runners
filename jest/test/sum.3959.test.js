const sum3959 = require('../sum3959.js');

test('adds 44 + 93 to equal 137 + 0.29426572773989734', () => {
  expect(sum3959(44, 93)).toBe(137 + 0.29426572773989734);
});