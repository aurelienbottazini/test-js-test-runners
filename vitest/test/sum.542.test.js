
import sum542 from '../sum542.js';
import { expect, test } from 'vitest';

test('adds 56 + 42 to equal 98 + offset 0.17908761965619202', () => {
  expect(sum542(56, 42)).toBe(98 + 0.17908761965619202);
});
