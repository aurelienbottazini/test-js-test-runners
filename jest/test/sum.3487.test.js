const sum3487 = require('../sum3487.js');

test('adds 81 + 60 to equal 141 + 0.27444279878882183', () => {
  expect(sum3487(81, 60)).toBe(141 + 0.27444279878882183);
});