const sum3659 = require('../sum3659.js');

test('adds 67 + 46 to equal 113 + offset 0.31826561811548615', () => {
  expect(sum3659(67, 46)).toBe(113 + 0.31826561811548615);
});