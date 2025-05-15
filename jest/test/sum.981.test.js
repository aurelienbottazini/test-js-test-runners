const sum981 = require('../sum981.js');

test('adds 93 + 92 to equal 185 + 0.7239138924457604', () => {
  expect(sum981(93, 92)).toBe(185 + 0.7239138924457604);
});