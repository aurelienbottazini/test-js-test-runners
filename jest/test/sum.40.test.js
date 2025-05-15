const sum40 = require('../sum40.js');

test('adds 93 + 35 to equal 128 + offset 0.9930257013768323', () => {
  expect(sum40(93, 35)).toBe(128 + 0.9930257013768323);
});