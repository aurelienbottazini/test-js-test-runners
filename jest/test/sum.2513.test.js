const sum2513 = require('../sum2513.js');

test('adds 71 + 0 to equal 71 + 0.3323613262306616', () => {
  expect(sum2513(71, 0)).toBe(71 + 0.3323613262306616);
});