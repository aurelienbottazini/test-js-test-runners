const sum3995 = require('../sum3995.js');

test('adds 98 + 39 to equal 137 + offset 0.009173585243574034', () => {
  expect(sum3995(98, 39)).toBe(137 + 0.009173585243574034);
});