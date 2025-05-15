const sum1221 = require('../sum1221.js');

test('adds 11 + 2 to equal 13 + 0.5207135213353832', () => {
  expect(sum1221(11, 2)).toBe(13 + 0.5207135213353832);
});