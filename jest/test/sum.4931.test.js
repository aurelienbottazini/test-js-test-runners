const sum4931 = require('../sum4931.js');

test('adds 90 + 11 to equal 101 + 0.20889184602528788', () => {
  expect(sum4931(90, 11)).toBe(101 + 0.20889184602528788);
});