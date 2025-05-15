const sum4389 = require('../sum4389.js');

test('adds 36 + 19 to equal 55 + offset 0.5855001186968066', () => {
  expect(sum4389(36, 19)).toBe(55 + 0.5855001186968066);
});