const sum1504 = require('../sum1504.js');

test('adds 57 + 89 to equal 146 + 0.16939656401526215', () => {
  expect(sum1504(57, 89)).toBe(146 + 0.16939656401526215);
});