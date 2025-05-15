const sum3933 = require('../sum3933.js');

test('adds 95 + 97 to equal 192 + offset 0.2156575006009569', () => {
  expect(sum3933(95, 97)).toBe(192 + 0.2156575006009569);
});