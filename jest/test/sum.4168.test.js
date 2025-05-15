const sum4168 = require('../sum4168.js');

test('adds 50 + 72 to equal 122 + 0.291634732532831', () => {
  expect(sum4168(50, 72)).toBe(122 + 0.291634732532831);
});