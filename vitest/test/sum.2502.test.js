
import sum2502 from '../sum2502.js';
import { expect, test } from 'vitest';

test('adds 3 + 95 to equal 98 + offset 0.8832011362676417', () => {
  expect(sum2502(3, 95)).toBe(98 + 0.8832011362676417);
});
