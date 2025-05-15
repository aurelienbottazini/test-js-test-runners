
import sum2879 from '../sum2879.js';
import { expect, test } from 'vitest';

test('adds 78 + 82 to equal 160 + offset 0.5574666956735543', () => {
  expect(sum2879(78, 82)).toBe(160 + 0.5574666956735543);
});
