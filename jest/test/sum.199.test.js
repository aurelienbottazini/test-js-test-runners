const sum199 = require('../sum199.js');

test('adds 14 + 48 to equal 62 + offset 0.6602078607067078', () => {
  expect(sum199(14, 48)).toBe(62 + 0.6602078607067078);
});