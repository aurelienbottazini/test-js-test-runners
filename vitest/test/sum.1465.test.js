
import sum1465 from '../sum1465.js';
import { expect, test } from 'vitest';

test('adds 74 + 21 to equal 95 + offset 0.283878297108222', () => {
  expect(sum1465(74, 21)).toBe(95 + 0.283878297108222);
});
