const sum1345 = require('../sum1345.js');

test('adds 83 + 79 to equal 162 + offset 0.7781712831734783', () => {
  expect(sum1345(83, 79)).toBe(162 + 0.7781712831734783);
});