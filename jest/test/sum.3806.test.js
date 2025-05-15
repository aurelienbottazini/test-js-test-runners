const sum3806 = require('../sum3806.js');

test('adds 88 + 15 to equal 103 + offset 0.8259497985318314', () => {
  expect(sum3806(88, 15)).toBe(103 + 0.8259497985318314);
});