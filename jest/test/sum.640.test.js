const sum640 = require('../sum640.js');

test('adds 56 + 49 to equal 105 + 0.7787462729767828', () => {
  expect(sum640(56, 49)).toBe(105 + 0.7787462729767828);
});