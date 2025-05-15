const sum3645 = require('../sum3645.js');

test('adds 76 + 21 to equal 97 + offset 0.6302664656791892', () => {
  expect(sum3645(76, 21)).toBe(97 + 0.6302664656791892);
});