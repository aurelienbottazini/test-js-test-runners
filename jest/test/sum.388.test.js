const sum388 = require('../sum388.js');

test('adds 47 + 76 to equal 123 + 0.8378761300961425', () => {
  expect(sum388(47, 76)).toBe(123 + 0.8378761300961425);
});