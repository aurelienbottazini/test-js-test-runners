
import sum4513 from '../sum4513.js';
import { expect, test } from 'vitest';

test('adds 9 + 63 to equal 72 + offset 0.4826317735817479', () => {
  expect(sum4513(9, 63)).toBe(72 + 0.4826317735817479);
});
