const sum395 = require('../sum395.js');

test('adds 27 + 38 to equal 65 + offset 0.5245041414826707', () => {
  expect(sum395(27, 38)).toBe(65 + 0.5245041414826707);
});