const sum2327 = require('../sum2327.js');

test('adds 67 + 44 to equal 111 + 0.44602902762155894', () => {
  expect(sum2327(67, 44)).toBe(111 + 0.44602902762155894);
});