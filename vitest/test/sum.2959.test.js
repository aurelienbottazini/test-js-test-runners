
import sum2959 from '../sum2959.js';
import { expect, test } from 'vitest';

test('adds 35 + 17 to equal 52 + offset 0.35756434991228747', () => {
  expect(sum2959(35, 17)).toBe(52 + 0.35756434991228747);
});
