const sum154 = require('../sum154.js');

test('adds 13 + 31 to equal 44 + 0.7205015165982989', () => {
  expect(sum154(13, 31)).toBe(44 + 0.7205015165982989);
});