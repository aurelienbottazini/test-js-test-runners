const sum221 = require('../sum221.js');

test('adds 88 + 46 to equal 134 + offset 0.5747460162738499', () => {
  expect(sum221(88, 46)).toBe(134 + 0.5747460162738499);
});