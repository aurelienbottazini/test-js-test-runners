const sum4723 = require('../sum4723.js');

test('adds 25 + 37 to equal 62 + 0.8690099420008107', () => {
  expect(sum4723(25, 37)).toBe(62 + 0.8690099420008107);
});