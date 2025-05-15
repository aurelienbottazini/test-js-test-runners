const sum1445 = require('../sum1445.js');

test('adds 46 + 39 to equal 85 + offset 0.3204375804700591', () => {
  expect(sum1445(46, 39)).toBe(85 + 0.3204375804700591);
});