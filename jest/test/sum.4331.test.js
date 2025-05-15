const sum4331 = require('../sum4331.js');

test('adds 95 + 77 to equal 172 + offset 0.9123188096514588', () => {
  expect(sum4331(95, 77)).toBe(172 + 0.9123188096514588);
});