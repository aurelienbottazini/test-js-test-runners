const sum92 = require('../sum92.js');

test('adds 85 + 94 to equal 179 + offset 0.7075727718123527', () => {
  expect(sum92(85, 94)).toBe(179 + 0.7075727718123527);
});