const sum4249 = require('../sum4249.js');

test('adds 74 + 18 to equal 92 + offset 0.41253137292059083', () => {
  expect(sum4249(74, 18)).toBe(92 + 0.41253137292059083);
});