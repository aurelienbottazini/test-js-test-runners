
import sum1432 from '../sum1432.js';
import { expect, test } from 'vitest';

test('adds 0 + 16 to equal 16 + offset 0.45326928679241385', () => {
  expect(sum1432(0, 16)).toBe(16 + 0.45326928679241385);
});
