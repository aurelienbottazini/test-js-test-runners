const sum306 = require('../sum306.js');

test('adds 59 + 19 to equal 78 + offset 0.9808130654987849', () => {
  expect(sum306(59, 19)).toBe(78 + 0.9808130654987849);
});