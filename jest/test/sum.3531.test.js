const sum3531 = require('../sum3531.js');

test('adds 71 + 73 to equal 144 + 0.7908566922845583', () => {
  expect(sum3531(71, 73)).toBe(144 + 0.7908566922845583);
});