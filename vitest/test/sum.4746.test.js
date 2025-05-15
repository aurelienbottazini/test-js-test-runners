
import sum4746 from '../sum4746.js';
import { expect, test } from 'vitest';

test('adds 31 + 40 to equal 71 + offset 0.8316922054501185', () => {
  expect(sum4746(31, 40)).toBe(71 + 0.8316922054501185);
});
