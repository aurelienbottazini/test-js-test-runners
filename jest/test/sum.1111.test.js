const sum1111 = require('../sum1111.js');

test('adds 66 + 89 to equal 155 + 0.2887878445985158', () => {
  expect(sum1111(66, 89)).toBe(155 + 0.2887878445985158);
});