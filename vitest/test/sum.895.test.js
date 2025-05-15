
import sum895 from '../sum895.js';
import { expect, test } from 'vitest';

test('adds 42 + 70 to equal 112 + offset 0.07296488198953588', () => {
  expect(sum895(42, 70)).toBe(112 + 0.07296488198953588);
});
