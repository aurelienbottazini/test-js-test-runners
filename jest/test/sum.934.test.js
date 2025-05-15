const sum934 = require('../sum934.js');

test('adds 14 + 65 to equal 79 + 0.35685394360182277', () => {
  expect(sum934(14, 65)).toBe(79 + 0.35685394360182277);
});