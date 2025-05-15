const sum1938 = require('../sum1938.js');

test('adds 57 + 3 to equal 60 + offset 0.11281997323393145', () => {
  expect(sum1938(57, 3)).toBe(60 + 0.11281997323393145);
});