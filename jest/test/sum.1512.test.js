const sum1512 = require('../sum1512.js');

test('adds 57 + 7 to equal 64 + offset 0.6517673910323566', () => {
  expect(sum1512(57, 7)).toBe(64 + 0.6517673910323566);
});