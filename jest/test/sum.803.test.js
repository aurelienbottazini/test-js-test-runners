const sum803 = require('../sum803.js');

test('adds 97 + 15 to equal 112 + 0.4457410143559404', () => {
  expect(sum803(97, 15)).toBe(112 + 0.4457410143559404);
});