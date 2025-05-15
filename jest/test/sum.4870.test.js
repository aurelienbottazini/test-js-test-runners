const sum4870 = require('../sum4870.js');

test('adds 89 + 71 to equal 160 + 0.8195566536269399', () => {
  expect(sum4870(89, 71)).toBe(160 + 0.8195566536269399);
});