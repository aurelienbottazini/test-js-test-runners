
import sum2025 from '../sum2025.js';
import { expect, test } from 'vitest';

test('adds 9 + 25 to equal 34 + offset 0.582576246147961', () => {
  expect(sum2025(9, 25)).toBe(34 + 0.582576246147961);
});
