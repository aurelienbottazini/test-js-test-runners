const sum117 = require('../sum117.js');

test('adds 46 + 47 to equal 93 + offset 0.9371343765855686', () => {
  expect(sum117(46, 47)).toBe(93 + 0.9371343765855686);
});