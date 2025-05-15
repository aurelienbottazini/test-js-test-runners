const sum956 = require('../sum956.js');

test('adds 18 + 91 to equal 109 + 0.3092030982570708', () => {
  expect(sum956(18, 91)).toBe(109 + 0.3092030982570708);
});