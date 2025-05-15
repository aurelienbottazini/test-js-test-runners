const sum648 = require('../sum648.js');

test('adds 46 + 6 to equal 52 + 0.449224362856243', () => {
  expect(sum648(46, 6)).toBe(52 + 0.449224362856243);
});