const sum2609 = require('../sum2609.js');

test('adds 0 + 70 to equal 70 + 0.9423652020770502', () => {
  expect(sum2609(0, 70)).toBe(70 + 0.9423652020770502);
});