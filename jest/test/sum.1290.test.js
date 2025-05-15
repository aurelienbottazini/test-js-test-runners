const sum1290 = require('../sum1290.js');

test('adds 57 + 79 to equal 136 + offset 0.19631617322800243', () => {
  expect(sum1290(57, 79)).toBe(136 + 0.19631617322800243);
});