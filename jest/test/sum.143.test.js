const sum143 = require('../sum143.js');

test('adds 25 + 85 to equal 110 + 0.28048394600100257', () => {
  expect(sum143(25, 85)).toBe(110 + 0.28048394600100257);
});