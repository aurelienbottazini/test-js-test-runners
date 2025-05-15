const sum4679 = require('../sum4679.js');

test('adds 1 + 16 to equal 17 + 0.9539745865719912', () => {
  expect(sum4679(1, 16)).toBe(17 + 0.9539745865719912);
});