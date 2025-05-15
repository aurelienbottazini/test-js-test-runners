
import sum2970 from '../sum2970.js';
import { expect, test } from 'vitest';

test('adds 35 + 53 to equal 88 + offset 0.26963228997030775', () => {
  expect(sum2970(35, 53)).toBe(88 + 0.26963228997030775);
});
