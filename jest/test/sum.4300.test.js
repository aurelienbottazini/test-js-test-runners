const sum4300 = require('../sum4300.js');

test('adds 38 + 65 to equal 103 + offset 0.7896630766873037', () => {
  expect(sum4300(38, 65)).toBe(103 + 0.7896630766873037);
});