const sum470 = require('../sum470.js');

test('adds 6 + 40 to equal 46 + offset 0.35410811565838773', () => {
  expect(sum470(6, 40)).toBe(46 + 0.35410811565838773);
});