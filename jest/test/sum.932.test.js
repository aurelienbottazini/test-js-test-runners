const sum932 = require('../sum932.js');

test('adds 35 + 5 to equal 40 + 0.45379747593788156', () => {
  expect(sum932(35, 5)).toBe(40 + 0.45379747593788156);
});