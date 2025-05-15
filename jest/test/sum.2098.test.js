const sum2098 = require('../sum2098.js');

test('adds 35 + 91 to equal 126 + 0.7096178564802443', () => {
  expect(sum2098(35, 91)).toBe(126 + 0.7096178564802443);
});