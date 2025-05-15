
import sum4576 from '../sum4576.js';
import { expect, test } from 'vitest';

test('adds 18 + 3 to equal 21 + offset 0.23558582111284876', () => {
  expect(sum4576(18, 3)).toBe(21 + 0.23558582111284876);
});
