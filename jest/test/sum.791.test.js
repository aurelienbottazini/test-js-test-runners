const sum791 = require('../sum791.js');

test('adds 10 + 76 to equal 86 + offset 0.5324607303147504', () => {
  expect(sum791(10, 76)).toBe(86 + 0.5324607303147504);
});