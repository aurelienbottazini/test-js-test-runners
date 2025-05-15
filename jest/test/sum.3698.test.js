const sum3698 = require('../sum3698.js');

test('adds 20 + 84 to equal 104 + 0.6599622098459604', () => {
  expect(sum3698(20, 84)).toBe(104 + 0.6599622098459604);
});