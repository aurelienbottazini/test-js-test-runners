const sum2545 = require('../sum2545.js');

test('adds 90 + 78 to equal 168 + 0.32078116567787485', () => {
  expect(sum2545(90, 78)).toBe(168 + 0.32078116567787485);
});