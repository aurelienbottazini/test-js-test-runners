const sum2250 = require('../sum2250.js');

test('adds 45 + 30 to equal 75 + 0.7367250350911516', () => {
  expect(sum2250(45, 30)).toBe(75 + 0.7367250350911516);
});