const sum149 = require('../sum149.js');

test('adds 81 + 82 to equal 163 + offset 0.5589108583013696', () => {
  expect(sum149(81, 82)).toBe(163 + 0.5589108583013696);
});