const sum4883 = require('../sum4883.js');

test('adds 66 + 49 to equal 115 + 0.3669436619328511', () => {
  expect(sum4883(66, 49)).toBe(115 + 0.3669436619328511);
});