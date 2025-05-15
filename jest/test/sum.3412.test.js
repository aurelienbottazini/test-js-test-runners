const sum3412 = require('../sum3412.js');

test('adds 66 + 41 to equal 107 + 0.5714701796343074', () => {
  expect(sum3412(66, 41)).toBe(107 + 0.5714701796343074);
});