const sum376 = require('../sum376.js');

test('adds 83 + 92 to equal 175 + offset 0.035051133417629665', () => {
  expect(sum376(83, 92)).toBe(175 + 0.035051133417629665);
});