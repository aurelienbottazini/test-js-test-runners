const sum195 = require('../sum195.js');

test('adds 66 + 89 to equal 155 + offset 0.41151572997146235', () => {
  expect(sum195(66, 89)).toBe(155 + 0.41151572997146235);
});