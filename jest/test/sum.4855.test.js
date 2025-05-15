const sum4855 = require('../sum4855.js');

test('adds 69 + 6 to equal 75 + 0.4273885280895031', () => {
  expect(sum4855(69, 6)).toBe(75 + 0.4273885280895031);
});