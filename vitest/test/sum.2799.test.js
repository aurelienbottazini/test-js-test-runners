
import sum2799 from '../sum2799.js';
import { expect, test } from 'vitest';

test('adds 75 + 63 to equal 138 + offset 0.19558457363284987', () => {
  expect(sum2799(75, 63)).toBe(138 + 0.19558457363284987);
});
