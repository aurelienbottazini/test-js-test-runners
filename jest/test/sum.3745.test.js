const sum3745 = require('../sum3745.js');

test('adds 59 + 7 to equal 66 + 0.3584539735811668', () => {
  expect(sum3745(59, 7)).toBe(66 + 0.3584539735811668);
});