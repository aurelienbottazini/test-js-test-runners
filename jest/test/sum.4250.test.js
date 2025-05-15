const sum4250 = require('../sum4250.js');

test('adds 17 + 26 to equal 43 + offset 0.37793577456116156', () => {
  expect(sum4250(17, 26)).toBe(43 + 0.37793577456116156);
});