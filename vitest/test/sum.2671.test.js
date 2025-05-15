
import sum2671 from '../sum2671.js';
import { expect, test } from 'vitest';

test('adds 49 + 70 to equal 119 + offset 0.5852901161581583', () => {
  expect(sum2671(49, 70)).toBe(119 + 0.5852901161581583);
});
