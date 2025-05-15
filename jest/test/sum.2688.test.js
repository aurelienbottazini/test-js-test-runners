const sum2688 = require('../sum2688.js');

test('adds 45 + 25 to equal 70 + offset 0.532707183911816', () => {
  expect(sum2688(45, 25)).toBe(70 + 0.532707183911816);
});