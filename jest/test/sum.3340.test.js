const sum3340 = require('../sum3340.js');

test('adds 1 + 84 to equal 85 + offset 0.20183479010561312', () => {
  expect(sum3340(1, 84)).toBe(85 + 0.20183479010561312);
});