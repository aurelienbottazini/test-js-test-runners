const sum4099 = require('../sum4099.js');

test('adds 0 + 87 to equal 87 + 0.9432982429745093', () => {
  expect(sum4099(0, 87)).toBe(87 + 0.9432982429745093);
});