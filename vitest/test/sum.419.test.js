
import sum419 from '../sum419.js';
import { expect, test } from 'vitest';

test('adds 43 + 55 to equal 98 + offset 0.013675436844433397', () => {
  expect(sum419(43, 55)).toBe(98 + 0.013675436844433397);
});
