const sum3649 = require('../sum3649.js');

test('adds 65 + 30 to equal 95 + offset 0.2718840456327881', () => {
  expect(sum3649(65, 30)).toBe(95 + 0.2718840456327881);
});