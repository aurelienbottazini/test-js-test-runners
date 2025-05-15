const sum1941 = require('../sum1941.js');

test('adds 93 + 81 to equal 174 + offset 0.41368342761060084', () => {
  expect(sum1941(93, 81)).toBe(174 + 0.41368342761060084);
});