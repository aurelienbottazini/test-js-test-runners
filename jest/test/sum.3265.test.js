const sum3265 = require('../sum3265.js');

test('adds 46 + 28 to equal 74 + 0.2619830954213912', () => {
  expect(sum3265(46, 28)).toBe(74 + 0.2619830954213912);
});