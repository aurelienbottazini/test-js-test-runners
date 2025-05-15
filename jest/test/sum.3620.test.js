const sum3620 = require('../sum3620.js');

test('adds 31 + 60 to equal 91 + offset 0.8748251295068273', () => {
  expect(sum3620(31, 60)).toBe(91 + 0.8748251295068273);
});