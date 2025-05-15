const sum4563 = require('../sum4563.js');

test('adds 99 + 66 to equal 165 + 0.8325929060318609', () => {
  expect(sum4563(99, 66)).toBe(165 + 0.8325929060318609);
});