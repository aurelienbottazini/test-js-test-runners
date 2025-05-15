const sum3632 = require('../sum3632.js');

test('adds 61 + 32 to equal 93 + offset 0.9261208932608729', () => {
  expect(sum3632(61, 32)).toBe(93 + 0.9261208932608729);
});