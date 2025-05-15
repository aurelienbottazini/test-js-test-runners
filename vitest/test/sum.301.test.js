
import sum301 from '../sum301.js';
import { expect, test } from 'vitest';

test('adds 37 + 52 to equal 89 + offset 0.6456933605124049', () => {
  expect(sum301(37, 52)).toBe(89 + 0.6456933605124049);
});
