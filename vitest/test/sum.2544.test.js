
import sum2544 from '../sum2544.js';
import { expect, test } from 'vitest';

test('adds 12 + 33 to equal 45 + offset 0.9507766400046112', () => {
  expect(sum2544(12, 33)).toBe(45 + 0.9507766400046112);
});
