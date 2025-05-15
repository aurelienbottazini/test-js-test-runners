const sum65 = require('../sum65.js');

test('adds 68 + 51 to equal 119 + 0.16337216173629154', () => {
  expect(sum65(68, 51)).toBe(119 + 0.16337216173629154);
});