
import sum2919 from '../sum2919.js';
import { expect, test } from 'vitest';

test('adds 65 + 42 to equal 107 + offset 0.4521366029547611', () => {
  expect(sum2919(65, 42)).toBe(107 + 0.4521366029547611);
});
