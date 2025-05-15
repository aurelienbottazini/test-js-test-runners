const sum401 = require('../sum401.js');

test('adds 91 + 71 to equal 162 + 0.6714088865376079', () => {
  expect(sum401(91, 71)).toBe(162 + 0.6714088865376079);
});