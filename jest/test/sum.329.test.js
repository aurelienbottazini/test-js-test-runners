const sum329 = require('../sum329.js');

test('adds 84 + 30 to equal 114 + 0.9483407024464193', () => {
  expect(sum329(84, 30)).toBe(114 + 0.9483407024464193);
});