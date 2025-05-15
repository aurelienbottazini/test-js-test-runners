const sum3566 = require('../sum3566.js');

test('adds 0 + 83 to equal 83 + offset 0.16055464576436707', () => {
  expect(sum3566(0, 83)).toBe(83 + 0.16055464576436707);
});