const sum2230 = require('../sum2230.js');

test('adds 28 + 61 to equal 89 + 0.6954530948480624', () => {
  expect(sum2230(28, 61)).toBe(89 + 0.6954530948480624);
});