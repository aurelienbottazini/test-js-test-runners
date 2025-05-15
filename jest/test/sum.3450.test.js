const sum3450 = require('../sum3450.js');

test('adds 79 + 89 to equal 168 + 0.9911589411868333', () => {
  expect(sum3450(79, 89)).toBe(168 + 0.9911589411868333);
});