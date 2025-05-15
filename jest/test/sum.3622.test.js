const sum3622 = require('../sum3622.js');

test('adds 30 + 16 to equal 46 + 0.9120498356121529', () => {
  expect(sum3622(30, 16)).toBe(46 + 0.9120498356121529);
});