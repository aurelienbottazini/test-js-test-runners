const sum4317 = require('../sum4317.js');

test('adds 16 + 71 to equal 87 + offset 0.950084022793463', () => {
  expect(sum4317(16, 71)).toBe(87 + 0.950084022793463);
});