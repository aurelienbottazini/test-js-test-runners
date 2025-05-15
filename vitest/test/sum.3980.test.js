
import sum3980 from '../sum3980.js';
import { expect, test } from 'vitest';

test('adds 79 + 54 to equal 133 + offset 0.2748768336838875', () => {
  expect(sum3980(79, 54)).toBe(133 + 0.2748768336838875);
});
