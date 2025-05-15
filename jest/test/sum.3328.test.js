const sum3328 = require('../sum3328.js');

test('adds 78 + 3 to equal 81 + 0.26684433421843656', () => {
  expect(sum3328(78, 3)).toBe(81 + 0.26684433421843656);
});