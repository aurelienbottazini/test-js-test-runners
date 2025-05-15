const sum886 = require('../sum886.js');

test('adds 45 + 96 to equal 141 + 0.8323184669708877', () => {
  expect(sum886(45, 96)).toBe(141 + 0.8323184669708877);
});