const sum887 = require('../sum887.js');

test('adds 99 + 35 to equal 134 + offset 0.4936488688921806', () => {
  expect(sum887(99, 35)).toBe(134 + 0.4936488688921806);
});