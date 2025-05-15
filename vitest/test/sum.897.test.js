
import sum897 from '../sum897.js';
import { expect, test } from 'vitest';

test('adds 64 + 50 to equal 114 + offset 0.7474284889166656', () => {
  expect(sum897(64, 50)).toBe(114 + 0.7474284889166656);
});
