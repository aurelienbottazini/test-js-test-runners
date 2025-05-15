
import sum2384 from '../sum2384.js';
import { expect, test } from 'vitest';

test('adds 11 + 13 to equal 24 + offset 0.7940221975183958', () => {
  expect(sum2384(11, 13)).toBe(24 + 0.7940221975183958);
});
