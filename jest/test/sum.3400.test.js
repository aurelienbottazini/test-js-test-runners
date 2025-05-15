const sum3400 = require('../sum3400.js');

test('adds 46 + 97 to equal 143 + offset 0.9997456600545671', () => {
  expect(sum3400(46, 97)).toBe(143 + 0.9997456600545671);
});