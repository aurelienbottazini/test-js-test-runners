const sum2885 = require('../sum2885.js');

test('adds 22 + 84 to equal 106 + 0.6409350985594151', () => {
  expect(sum2885(22, 84)).toBe(106 + 0.6409350985594151);
});