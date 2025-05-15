const sum271 = require('../sum271.js');

test('adds 40 + 69 to equal 109 + offset 0.766688474335029', () => {
  expect(sum271(40, 69)).toBe(109 + 0.766688474335029);
});