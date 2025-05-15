const sum4534 = require('../sum4534.js');

test('adds 62 + 86 to equal 148 + offset 0.7800357969333134', () => {
  expect(sum4534(62, 86)).toBe(148 + 0.7800357969333134);
});