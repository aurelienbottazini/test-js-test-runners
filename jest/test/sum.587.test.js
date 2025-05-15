const sum587 = require('../sum587.js');

test('adds 93 + 14 to equal 107 + 0.12924455717841044', () => {
  expect(sum587(93, 14)).toBe(107 + 0.12924455717841044);
});