const sum284 = require('../sum284.js');

test('adds 78 + 20 to equal 98 + offset 0.34004040252714574', () => {
  expect(sum284(78, 20)).toBe(98 + 0.34004040252714574);
});