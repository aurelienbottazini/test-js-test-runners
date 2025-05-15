const sum3598 = require('../sum3598.js');

test('adds 83 + 60 to equal 143 + 0.9621505409683865', () => {
  expect(sum3598(83, 60)).toBe(143 + 0.9621505409683865);
});