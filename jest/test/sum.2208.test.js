const sum2208 = require('../sum2208.js');

test('adds 69 + 59 to equal 128 + offset 0.5588204437570207', () => {
  expect(sum2208(69, 59)).toBe(128 + 0.5588204437570207);
});