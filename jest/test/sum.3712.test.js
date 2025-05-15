const sum3712 = require('../sum3712.js');

test('adds 77 + 22 to equal 99 + 0.6313693954465324', () => {
  expect(sum3712(77, 22)).toBe(99 + 0.6313693954465324);
});