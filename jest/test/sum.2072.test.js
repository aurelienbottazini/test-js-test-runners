const sum2072 = require('../sum2072.js');

test('adds 5 + 66 to equal 71 + offset 0.7660303573403829', () => {
  expect(sum2072(5, 66)).toBe(71 + 0.7660303573403829);
});