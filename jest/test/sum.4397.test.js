const sum4397 = require('../sum4397.js');

test('adds 79 + 7 to equal 86 + offset 0.03657779910226966', () => {
  expect(sum4397(79, 7)).toBe(86 + 0.03657779910226966);
});