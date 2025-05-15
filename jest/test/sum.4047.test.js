const sum4047 = require('../sum4047.js');

test('adds 20 + 50 to equal 70 + 0.26480709970139327', () => {
  expect(sum4047(20, 50)).toBe(70 + 0.26480709970139327);
});