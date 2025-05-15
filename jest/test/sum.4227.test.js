const sum4227 = require('../sum4227.js');

test('adds 2 + 12 to equal 14 + offset 0.9498084583887066', () => {
  expect(sum4227(2, 12)).toBe(14 + 0.9498084583887066);
});