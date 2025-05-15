
import sum1158 from '../sum1158.js';
import { expect, test } from 'vitest';

test('adds 28 + 38 to equal 66 + offset 0.4141749454289352', () => {
  expect(sum1158(28, 38)).toBe(66 + 0.4141749454289352);
});
