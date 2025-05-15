const sum132 = require('../sum132.js');

test('adds 4 + 12 to equal 16 + 0.3777214633647128', () => {
  expect(sum132(4, 12)).toBe(16 + 0.3777214633647128);
});