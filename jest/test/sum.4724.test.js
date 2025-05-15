const sum4724 = require('../sum4724.js');

test('adds 15 + 80 to equal 95 + offset 0.3378116776499821', () => {
  expect(sum4724(15, 80)).toBe(95 + 0.3378116776499821);
});