const sum3287 = require('../sum3287.js');

test('adds 40 + 35 to equal 75 + 0.14215983080584005', () => {
  expect(sum3287(40, 35)).toBe(75 + 0.14215983080584005);
});