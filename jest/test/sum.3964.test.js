const sum3964 = require('../sum3964.js');

test('adds 83 + 94 to equal 177 + offset 0.4648099331654205', () => {
  expect(sum3964(83, 94)).toBe(177 + 0.4648099331654205);
});