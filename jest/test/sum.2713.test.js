const sum2713 = require('../sum2713.js');

test('adds 30 + 60 to equal 90 + offset 0.3227084310070062', () => {
  expect(sum2713(30, 60)).toBe(90 + 0.3227084310070062);
});