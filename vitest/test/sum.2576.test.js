
import sum2576 from '../sum2576.js';
import { expect, test } from 'vitest';

test('adds 50 + 85 to equal 135 + offset 0.8582344651572037', () => {
  expect(sum2576(50, 85)).toBe(135 + 0.8582344651572037);
});
