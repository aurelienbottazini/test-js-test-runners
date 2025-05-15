const sum340 = require('../sum340.js');

test('adds 43 + 15 to equal 58 + 0.017906821199273004', () => {
  expect(sum340(43, 15)).toBe(58 + 0.017906821199273004);
});