
import sum4077 from '../sum4077.js';
import { expect, test } from 'vitest';

test('adds 30 + 36 to equal 66 + offset 0.36742869579850623', () => {
  expect(sum4077(30, 36)).toBe(66 + 0.36742869579850623);
});
