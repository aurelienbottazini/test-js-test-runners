const sum2606 = require('../sum2606.js');

test('adds 5 + 41 to equal 46 + offset 0.7946755498963403', () => {
  expect(sum2606(5, 41)).toBe(46 + 0.7946755498963403);
});