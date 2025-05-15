
import sum2787 from '../sum2787.js';
import { expect, test } from 'vitest';

test('adds 53 + 53 to equal 106 + offset 0.9153973962670829', () => {
  expect(sum2787(53, 53)).toBe(106 + 0.9153973962670829);
});
