const sum4690 = require('../sum4690.js');

test('adds 25 + 18 to equal 43 + 0.07759981002756977', () => {
  expect(sum4690(25, 18)).toBe(43 + 0.07759981002756977);
});