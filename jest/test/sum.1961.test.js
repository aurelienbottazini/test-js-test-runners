const sum1961 = require('../sum1961.js');

test('adds 81 + 13 to equal 94 + offset 0.5497558570951874', () => {
  expect(sum1961(81, 13)).toBe(94 + 0.5497558570951874);
});