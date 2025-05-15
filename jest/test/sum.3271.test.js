const sum3271 = require('../sum3271.js');

test('adds 69 + 8 to equal 77 + offset 0.4863594598455405', () => {
  expect(sum3271(69, 8)).toBe(77 + 0.4863594598455405);
});