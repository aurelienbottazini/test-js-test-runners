
import sum3366 from '../sum3366.js';
import { expect, test } from 'vitest';

test('adds 63 + 65 to equal 128 + offset 0.668940506493315', () => {
  expect(sum3366(63, 65)).toBe(128 + 0.668940506493315);
});
