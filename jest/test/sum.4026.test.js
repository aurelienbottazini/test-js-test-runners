const sum4026 = require('../sum4026.js');

test('adds 44 + 16 to equal 60 + offset 0.5921742689218432', () => {
  expect(sum4026(44, 16)).toBe(60 + 0.5921742689218432);
});