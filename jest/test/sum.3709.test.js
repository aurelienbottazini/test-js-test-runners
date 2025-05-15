const sum3709 = require('../sum3709.js');

test('adds 52 + 60 to equal 112 + 0.11823427761309868', () => {
  expect(sum3709(52, 60)).toBe(112 + 0.11823427761309868);
});