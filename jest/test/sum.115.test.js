const sum115 = require('../sum115.js');

test('adds 0 + 23 to equal 23 + 0.2266767042500557', () => {
  expect(sum115(0, 23)).toBe(23 + 0.2266767042500557);
});