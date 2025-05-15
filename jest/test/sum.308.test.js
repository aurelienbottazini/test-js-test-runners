const sum308 = require('../sum308.js');

test('adds 67 + 85 to equal 152 + offset 0.769341075494406', () => {
  expect(sum308(67, 85)).toBe(152 + 0.769341075494406);
});