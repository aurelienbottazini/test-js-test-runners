
import sum4113 from '../sum4113.js';
import { expect, test } from 'vitest';

test('adds 99 + 20 to equal 119 + offset 0.45466205183984754', () => {
  expect(sum4113(99, 20)).toBe(119 + 0.45466205183984754);
});
