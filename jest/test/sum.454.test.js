const sum454 = require('../sum454.js');

test('adds 76 + 79 to equal 155 + offset 0.1677880448948167', () => {
  expect(sum454(76, 79)).toBe(155 + 0.1677880448948167);
});