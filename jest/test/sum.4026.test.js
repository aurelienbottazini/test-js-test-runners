const sum4026 = require('../sum4026.js');

test('adds 55 + 60 to equal 115 + 0.6026954117613553', () => {
  expect(sum4026(55, 60)).toBe(115 + 0.6026954117613553);
});