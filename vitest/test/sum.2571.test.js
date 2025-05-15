
import sum2571 from '../sum2571.js';
import { expect, test } from 'vitest';

test('adds 17 + 78 to equal 95 + offset 0.9412839519812536', () => {
  expect(sum2571(17, 78)).toBe(95 + 0.9412839519812536);
});
