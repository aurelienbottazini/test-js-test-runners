const sum4886 = require('../sum4886.js');

test('adds 51 + 13 to equal 64 + 0.6710869114645686', () => {
  expect(sum4886(51, 13)).toBe(64 + 0.6710869114645686);
});