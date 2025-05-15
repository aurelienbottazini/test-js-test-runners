const sum398 = require('../sum398.js');

test('adds 57 + 94 to equal 151 + 0.09108143549992964', () => {
  expect(sum398(57, 94)).toBe(151 + 0.09108143549992964);
});