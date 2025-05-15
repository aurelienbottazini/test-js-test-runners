const sum1080 = require('../sum1080.js');

test('adds 69 + 44 to equal 113 + offset 0.8908890669019546', () => {
  expect(sum1080(69, 44)).toBe(113 + 0.8908890669019546);
});