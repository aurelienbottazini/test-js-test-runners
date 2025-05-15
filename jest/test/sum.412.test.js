const sum412 = require('../sum412.js');

test('adds 10 + 9 to equal 19 + 0.6925788763516021', () => {
  expect(sum412(10, 9)).toBe(19 + 0.6925788763516021);
});