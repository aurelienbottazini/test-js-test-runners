const sum4394 = require('../sum4394.js');

test('adds 20 + 84 to equal 104 + offset 0.8829242472609005', () => {
  expect(sum4394(20, 84)).toBe(104 + 0.8829242472609005);
});