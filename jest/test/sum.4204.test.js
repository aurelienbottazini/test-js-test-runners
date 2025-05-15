const sum4204 = require('../sum4204.js');

test('adds 17 + 96 to equal 113 + offset 0.528665228155302', () => {
  expect(sum4204(17, 96)).toBe(113 + 0.528665228155302);
});