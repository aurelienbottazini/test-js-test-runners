const sum1418 = require('../sum1418.js');

test('adds 5 + 74 to equal 79 + offset 0.11043366027477808', () => {
  expect(sum1418(5, 74)).toBe(79 + 0.11043366027477808);
});