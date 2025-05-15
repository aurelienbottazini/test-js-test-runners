const sum481 = require('../sum481.js');

test('adds 59 + 70 to equal 129 + 0.4851903136353103', () => {
  expect(sum481(59, 70)).toBe(129 + 0.4851903136353103);
});