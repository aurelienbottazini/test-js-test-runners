const sum1358 = require('../sum1358.js');

test('adds 27 + 65 to equal 92 + offset 0.8875741969662233', () => {
  expect(sum1358(27, 65)).toBe(92 + 0.8875741969662233);
});