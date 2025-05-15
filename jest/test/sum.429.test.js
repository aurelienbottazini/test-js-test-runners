const sum429 = require('../sum429.js');

test('adds 32 + 56 to equal 88 + 0.43402298305605946', () => {
  expect(sum429(32, 56)).toBe(88 + 0.43402298305605946);
});